import { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const BtnOrange = lazy(() => import("mfe-design-system/ButtonOrange"));
const Input = lazy(() => import("mfe-design-system/Input"));
const Loading = lazy(() => import("mfe-design-system/Loading"));

export default function Login() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function handleLogin() {
    if (input.trim() === "") {
      setError("Campo obrigatório");
      return;
    }

    setError(null);
    localStorage.setItem("name", input);
    navigate("/dashboard");
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (error && e.target.value.trim() !== "") {
      setError(null);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex justify-center items-center h-screen bg-teddy-white">
        <div className="max-w-[521px] w-full px-2.5 ">
          <span className="text-center block font-[400] text-2xl md:text-[36px] mb-5 ">
            Olá, seja bem-vindo!
          </span>
          <Input
            className={`mb-2 ${error ? "!border-red-500" : ""}`}
            placeholder="Digite seu nome:"
            onChange={handleInputChange}
            value={input}
          />
          {error && (
            <p className="text-red-500 text-sm relative bottom-[9px]">
              {error}
            </p>
          )}
          <BtnOrange title="Entrar" click={handleLogin} variant="default" />
        </div>
      </div>
    </Suspense>
  );
}
