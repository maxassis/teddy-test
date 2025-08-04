import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InitialRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("name");

    if (name) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return null;
}
