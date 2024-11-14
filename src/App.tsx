import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './providers/AuthProvider';
import router from './router';
import { auth } from './utils/firebase';

function App() {
  return (
    <AuthProvider auth={auth}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
