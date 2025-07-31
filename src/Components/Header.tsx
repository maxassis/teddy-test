import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full h-[100px] bg-white shadow-teddy pl-[50px] pr-[120px] flex items-center justify-between ">
      <div className="flex items-center gap-[46px]">
        <img src={Menu} alt="Menu" />
        <img src={Logo} alt="Logo" />
      </div>

      <div className="flex items-center gap-[33px]">
        <span>Clientes</span>
        <span>Clientes selecionados</span>
        <span>Sair</span>
      </div>

      <span>
        Olá, <strong>Usuário!</strong>
      </span>
    </header>
  );
}
