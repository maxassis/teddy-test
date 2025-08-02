import Header from "../Components/Header";
import SideBar from "mfe-design-system/SideBar";
import Clients from "../Components/Clients";
import ClientsSelect from "../Components/ClientsSelect";
import useClientStore from "mfe-store/ClientsStore";
import useSidebarStore from "mfe-store/SidebarStore";

export default function Dashboard() {
  const { typeClient, setClient, setSelected } = useClientStore();
  const { isOpen, closeSidebar } = useSidebarStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] pb-10">
      <SideBar
        isOpen={isOpen}
        closeSidebar={closeSidebar}
        setClient={setClient}
        setSelected={setSelected}
      />
      <Header />
      {typeClient === "clients" ? <Clients /> : <ClientsSelect />}
    </div>
  );
}
