import { useRoutes, Navigate } from 'react-router-dom';
import Dashboardlayout from '~/layouts/dashboard-layout';
import Dashboard from '~/pages/dashboard';
import DashboardCustomer from '~/pages/dashboard/customer';
import Landing from '~/pages/Landing';

export function AppRoutes() {
	return useRoutes([
		{
			path: '/',
			element: <Landing />,
		},
    {
      path : '/dashboard',
      element : <Dashboardlayout />,
			children: [
        { 
          path: '', 
          element: <Navigate to="home" /> 
        },
        {
          path: "home",
          element: <Dashboard />,
        },
        { 
					path: "customer", 
					element: <DashboardCustomer />  
				},
      ],

    }
	]);
}
