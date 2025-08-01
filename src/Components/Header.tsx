import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.png";
import useSidebarStore from "../store/ui-store";
import useClientStore from "../store/clients-store";

export default function Header() {
  const { openSidebar } = useSidebarStore();
  const { setClient, setSelected, typeClient } = useClientStore();

  const handleClientClick = () => {
    setClient();
  };

  const handleSelectedClick = () => {
    setSelected();
  };

  const handleLogoutClick = () => {};

  return (
    <header className="w-full h-[100px] bg-white shadow-teddy px-2.5 md:pl-[50px] md:pr-[120px] flex items-center justify-between ">
      <div className="flex items-center gap-[46px]">
        <img
          src={Menu}
          alt="Menu"
          onClick={() => openSidebar()}
          className="cursor-pointer"
        />
        <img src={Logo} alt="Logo" className="hidden md:block" />
      </div>
      <div className="items-center gap-[33px] md:flex hidden">
        <span
          onClick={handleClientClick}
          className={`cursor-pointer transition-all duration-200 ${
            typeClient === "clients" ? "text-teddy-orange underline" : ""
          }`}
        >
          Clientes
        </span>
        <span
          onClick={handleSelectedClick}
          className={`cursor-pointer transition-all duration-200 ${
            typeClient === "selected" ? "text-teddy-orange underline" : ""
          }`}
        >
          Clientes selecionados
        </span>
        <span
          onClick={handleLogoutClick}
          className={`cursor-pointer transition-all duration-200`}
        >
          Sair
        </span>
      </div>
      <span>
        Olá, <strong>Usuário!</strong>
      </span>
    </header>
  );
}
