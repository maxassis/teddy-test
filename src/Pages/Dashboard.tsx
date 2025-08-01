import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Clients from "../Components/Clients";
import ClientsSelect from "../Components/ClientsSelect";
import useClientStore from "../store/clients-store";
// import ModalDelete from "../Components/ModalDelete";

export default function Dashboard() {
  const { typeClient } = useClientStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] pb-10">
      <SideBar />
      <Header />
      {typeClient === "clients" ? <Clients /> : <ClientsSelect />}

      {/* <ModalDelete /> */}
    </div>
  );
}
