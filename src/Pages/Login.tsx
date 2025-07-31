import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-teddy-white">
      <div className="max-w-[521px] w-full px-2.5 ">
        <span className="text-center block font-[400] text-2xl md:text-[36px] mb-5 ">
          Olá, seja bem-vindo!
        </span>
        <Input className="mb-5" />
        <Button title="Enviar" />
      </div>
    </div>
  );
}
