import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const name = localStorage.getItem("name");

  if (!name) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
