import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../hooks/useAuth';
import { RouteProps } from '../types/route.type';

const DashboardRoute: FC<RouteProps> = ({ component: Component }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <Component />
    </DashboardLayout>
  );
};
export default DashboardRoute;
