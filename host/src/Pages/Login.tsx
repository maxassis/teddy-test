import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnOrange from "mfe-design-system/ButtonOrange";
import Input from "mfe-design-system/Input";

export default function Login() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("name", input);
    navigate("/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-teddy-white">
      <div className="max-w-[521px] w-full px-2.5 ">
        <span className="text-center block font-[400] text-2xl md:text-[36px] mb-5 ">
          Olá, seja bem-vindo!
        </span>
        <Input
          className="mb-5"
          placeholder="Digite seu nome:"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BtnOrange title="Entrar" click={handleLogin} variant="default" />
      </div>
    </div>
  );
}
