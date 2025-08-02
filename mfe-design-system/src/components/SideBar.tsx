import Logo from "../assets/logo.png";
import Left from "../assets/left.svg";

interface SideBarProps {
  isOpen: boolean;
  closeSidebar: () => void;
  setClient: () => void;
  setSelected: () => void;
}

export default function SideBar({
  isOpen,
  closeSidebar,
  setClient,
  setSelected,
}: SideBarProps) {
  function changeClient() {
    setClient();
    closeSidebar();
  }

  function changeSelected() {
    setSelected();
    closeSidebar();
  }

  return (
    <>
      <div
        className={`absolute left-0 top-0 h-screen w-[260px] bg-white shadow-md z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {isOpen && (
          <>
            <div className="w-full h-[128px] bg-[#363636] grid place-items-center relative">
              <img src={Logo} alt="Logo" className="h-16" />
              <div
                onClick={() => closeSidebar()}
                className="h-[42px] w-[42px] rounded-full bg-black absolute bottom-[-21px] right-[-21px] grid place-items-center cursor-pointer"
              >
                <img src={Left} alt="Left" />
              </div>
            </div>
            <div className="flex-1 pt-[48px] pl-6">
              <div className="h-[44px] flex items-center gap-3 cursor-pointer px-4 rounded-l-lg hover:text-teddy-orange group transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="group-hover:fill-teddy-orange transition-colors duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M17.358 6.675 11.9 2.308c-1.067-.85-2.733-.858-3.792-.008L2.65 6.675C1.867 7.3 1.392 8.55 1.558 9.533l1.05 6.284c.242 1.408 1.55 2.516 2.975 2.516h8.834c1.408 0 2.741-1.133 2.983-2.525l1.05-6.283c.15-.975-.325-2.225-1.092-2.85ZM10.625 15a.63.63 0 0 1-.625.625.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625V15Z"
                  />
                </svg>
                <span>Home</span>
              </div>
              <div
                onClick={() => changeClient()}
                className="h-[44px] flex items-center gap-3 cursor-pointer px-4 rounded-l-lg hover:text-teddy-orange group transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="18"
                  fill="none"
                  viewBox="0 0 12 18"
                  className="group-hover:fill-teddy-orange transition-colors duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M6 .625a3.962 3.962 0 0 0-3.958 3.958c0 2.142 1.675 3.875 3.858 3.95a.672.672 0 0 1 .183 0h.059a3.948 3.948 0 0 0 3.816-3.95A3.962 3.962 0 0 0 6 .625Zm4.233 10.125c-2.325-1.55-6.116-1.55-8.458 0-1.058.708-1.642 1.667-1.642 2.692 0 1.025.584 1.975 1.634 2.675 1.166.783 2.7 1.175 4.233 1.175 1.533 0 3.067-.392 4.233-1.175 1.05-.709 1.634-1.659 1.634-2.692-.009-1.025-.584-1.975-1.634-2.675Z"
                  />
                </svg>
                <span>Clientes</span>
              </div>
              <div
                onClick={() => changeSelected()}
                className="h-[44px] flex items-center gap-3 cursor-pointer px-4 rounded-l-lg hover:text-teddy-orange group transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  fill="none"
                  viewBox="0 0 16 18"
                  className="group-hover:fill-teddy-orange transition-colors duration-200"
                >
                  <path
                    fill="currentColor"
                    d="M8 10.584c-4.175 0-7.575 2.8-7.575 6.25 0 .233.183.417.417.417h14.316a.413.413 0 0 0 .417-.417c0-3.45-3.4-6.25-7.575-6.25ZM8 .584c-.983 0-1.883.342-2.6.917a4.13 4.13 0 0 0-1.567 3.25c0 .783.217 1.516.609 2.141A4.124 4.124 0 0 0 8 8.917c1.05 0 2.008-.383 2.742-1.041.325-.275.608-.609.825-.984a4.08 4.08 0 0 0 .6-2.141C12.167 2.45 10.3.584 8 .584Zm2.158 3.717L7.933 6.35a.77.77 0 0 1-.533.208c-.2 0-.4-.075-.55-.225L5.825 5.301a.78.78 0 0 1 0-1.109.78.78 0 0 1 1.108 0l.492.492L9.1 3.142a.778.778 0 0 1 1.1.042.797.797 0 0 1-.042 1.117Z"
                  />
                </svg>
                <span>Clientes selecionados</span>
              </div>
            </div>
          </>
        )}
      </div>
      {isOpen && (
        <div
          className="absolute inset-0 bg-black opacity-[0.3] z-30"
          onClick={() => closeSidebar()}
        ></div>
      )}
    </>
  );
}
