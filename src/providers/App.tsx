import { BrowserRouter as Router } from 'react-router-dom';

export function AppProviders(props: React.PropsWithChildren) {
  return (
    <Router>
      {props.children}
    </Router>
  );
}
