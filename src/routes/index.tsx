import { useRoutes } from 'react-router-dom';
import Landing from '../pages/Landing';

export function AppRoutes() {
	return useRoutes([
		{
			path: '/',
			element: <Landing />,
		},
    {
      path : '/dashboard',
      element: <h1>Dashboard</h1>
    }
	]);
}
