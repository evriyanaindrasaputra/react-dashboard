import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '~/context/auth-context';
import 'react-toastify/dist/ReactToastify.css';



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
export function AppProviders(props: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AuthProvider>
        <Router>
          {props.children}
        </Router>
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  );
}
