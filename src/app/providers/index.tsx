import { BrowserRouter as Router } from 'react-router-dom';
import type { ReactNode } from 'react';

export const withProviders = (children: ReactNode) => (
  <Router>
    {children}
  </Router>
);