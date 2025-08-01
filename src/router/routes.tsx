import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import InitialRedirect from "./InitialRedirect";
import ProtectedRoute from "./protectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialRedirect />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
