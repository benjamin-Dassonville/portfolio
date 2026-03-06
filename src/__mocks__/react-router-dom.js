import React from "react";

// Manual mock for react-router-dom used in Jest tests
export const MemoryRouter = ({ children }) => (
  <div className="memory-router">{children}</div>
);
export const BrowserRouter = ({ children }) => (
  <div className="browser-router">{children}</div>
);
export const Routes = ({ children }) => (
  <div className="routes">{children}</div>
);
export const Route = ({ element }) => element;
export const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);
export const NavLink = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);
export const useLocation = () => ({ pathname: "/" });
export const useNavigate = () => jest.fn();
export const useParams = () => ({});
