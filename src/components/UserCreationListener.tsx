import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import echo from '../socket/echo';

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  balance: number;
}

const UserCreationListener = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch initial users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://reverb.test/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Listen for new user creation
  useEffect(() => {
    echo.channel('users').listen('UserCreatedEvent', (e: User) => {
      setUsers((prevUsers) => {
        const userIndex = prevUsers.findIndex((user) => user.id === e.id);
        if (userIndex !== -1) {
          // Update existing user
          const updatedUsers = [...prevUsers];
          updatedUsers[userIndex] = e;
          return updatedUsers;
        }
        // Add new user at the beginning
        return [e, ...prevUsers];
      });
    });

    return () => {
      echo.leave('users');
    };
  }, []);

  const deleteUser = async (id: number) => {
    try {
      await fetch(`http://reverb.test/api/user/${id}`, {
        method: 'DELETE',
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 ">Recently Created Users</h2>
      {users.length === 0 && <p className="text-gray-600">No users found</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-200 p-4 rounded-lg cursor-pointer"
            onClick={() => deleteUser(user.id)}
          >
            <h3 className="font-bold break-all">{user.name}</h3>
            <p className="text-gray-600 break-all">{user.email}</p>
            <p className="text-gray-600 break-all">{user.balance}</p>
            <p className="text-sm text-gray-500">
              Joined: {new Date(user.created_at).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserCreationListener;
