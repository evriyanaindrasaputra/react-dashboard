import { useRoutes } from 'react-router-dom';
import Dashboardlayout from '~/layouts/dashboard-layout';
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
          path: "",
          element: <h1>Home Dashboard</h1>,
        },
        { 
					path: "user", 
					element: <h1>Home User Dashboard</h1>  
				},
      ],

    }
	]);
}
