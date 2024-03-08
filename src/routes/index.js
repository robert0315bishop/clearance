import { useRoutes } from 'react-router-dom';
import UserRoutes from './UserRoutes';

export default function ThemeRoutes() {
  return useRoutes([UserRoutes]);
}