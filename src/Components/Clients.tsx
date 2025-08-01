import { useEffect, useState } from "react";
import PaginationComponent from "../Components/Pagination";
import Card from "./Card";
import Grid from "./Grid";
import { useQuery } from "@tanstack/react-query";

export interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string; // ou Date, se você for converter
  updatedAt: string;
}

export interface ClientsResponse {
  clients: Client[];
  totalPages: number;
  currentPage: number;
}

interface FetchResponse {
  data: ClientsResponse;
  isSuccess: boolean;
}

export default function Clients() {
  const [, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageClick = (selectedItem: { selected: number }) => {
    console.log(selectedItem);
    // setCurrentPage(selectedItem.selected);
    setPage(selectedItem.selected + 1);
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["clients", page, limit],
    queryFn: () =>
      fetch(
        `https://boasorte.teddybackoffice.com.br/users?page=${page}&limit=${limit}`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (isSuccess && data) {
      const clientsResponse = data as FetchResponse["data"];
      setTotalPages(clientsResponse.totalPages);
    }
  }, [isSuccess, data]);

  return (
    <div className="max-w-[1200px] w-full mx-auto mt-[30px] flex-1">
      <div className="flex-1 px-2.5 mb-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[18px] ">
            <strong className="text-sm md:text-[18px]">
              {data === undefined ? 0 : data.clients.length}
            </strong>{" "}
            <span className="text-sm md:text-[18px]">clientes encontrados</span>
          </span>
          <div className="flex items-center gap-2 text-[18px]">
            <span className="text-sm md:text-[18px]">Clientes por página:</span>
            <div className="text-sm md:text-[18px]">16</div>
          </div>
        </div>
      </div>

      <Grid>
        {data?.clients?.map((client: Client) => (
          <Card
            id={client.id}
            key={client.id}
            type="client"
            name={client.name}
            salary={client.salary}
            companyValuation={client.companyValuation}
          />
        ))}
      </Grid>

      <div className="mx-2.5">
        <button className="w-full max-w-[1180px] h-10 border-[2px] border-teddy-orange mt-5 mb-5 rounded-sm text-sm font-bold text-teddy-orange cursor-pointer">
          Criar cliente
        </button>
      </div>

      <PaginationComponent
        pageCount={totalPages}
        onPageChange={handlePageClick}
      />
    </div>
  );
}
