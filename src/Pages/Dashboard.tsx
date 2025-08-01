import { useState } from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import PaginationComponent from "../Components/Pagination";
import SideBar from "../Components/SideBar";

export default function Dashboard() {
  const [, setCurrentPage] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] pb-10">
      <SideBar />

      <Header />

      <div className="max-w-[1200px] w-full mx-auto mt-[30px] flex-1">
        <div className="flex-1 px-2.5 mb-2.5">
          <div className="flex items-center justify-between">
            <span>
              <strong>16</strong> clientes encontrados
            </span>
            <div className="flex items-center gap-2">
              <span>Clientes por página:</span>
              <div>16</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 grid-rows-4 px-2.5 items-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="mx-2.5">
          <button className="w-full max-w-[1180px] h-10 border-[2px] border-teddy-orange mt-5 mb-5 rounded-sm text-sm font-bold text-teddy-orange cursor-pointer">
            Criar cliente
          </button>
        </div>

        <PaginationComponent pageCount={12} onPageChange={handlePageClick} />
      </div>
    </div>
  );
}
