import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import InitialRedirect from "./InitialRedirect";
// import ProtectedRoute from "./protectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <InitialRedirect />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

export default router;
