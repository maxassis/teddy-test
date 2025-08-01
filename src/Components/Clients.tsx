import { useState } from "react";
import PaginationComponent from "../Components/Pagination";
import Card from "./Card";
import Grid from "./Grid";

export default function Clients() {
  const [, setCurrentPage] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto mt-[30px] flex-1">
      <div className="flex-1 px-2.5 mb-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[18px] ">
            <strong className="text-sm md:text-[18px]">16</strong>{" "}
            <span className="text-sm md:text-[18px]">clientes encontrados</span>
          </span>
          <div className="flex items-center gap-2 text-[18px]">
            <span className="text-sm md:text-[18px]">Clientes por página:</span>
            <div className="text-sm md:text-[18px]">16</div>
          </div>
        </div>
      </div>

      <Grid>
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
        <Card type="client" />
      </Grid>

      <div className="mx-2.5">
        <button className="w-full max-w-[1180px] h-10 border-[2px] border-teddy-orange mt-5 mb-5 rounded-sm text-sm font-bold text-teddy-orange cursor-pointer">
          Criar cliente
        </button>
      </div>

      <PaginationComponent pageCount={12} onPageChange={handlePageClick} />
    </div>
  );
}
