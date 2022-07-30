import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


export function AppProviders(props: React.PropsWithChildren) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router>
        {props.children}
      </Router>
    </QueryClientProvider>
  );
}
