import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.png";
import useSidebarStore from "../store/ui-store";

export default function Header() {
  const { openSidebar } = useSidebarStore();

  return (
    <header className="w-full h-[100px] bg-white shadow-teddy pl-[50px] pr-[120px] flex items-center justify-between ">
      <div className="flex items-center gap-[46px]">
        <img
          src={Menu}
          alt="Menu"
          onClick={() => openSidebar()}
          className="cursor-pointer"
        />
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
