/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react";
import PaginationComponent from "../Components/Pagination";
import Card from "./Card";
import Close from "../assets/fechar.svg";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import BtnOrange from "mfe-design-system/ButtonOrange";
import Input from "mfe-design-system/Input";
import { toast } from "sonner";

export interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
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

interface CreateClientData {
  name: string;
  salary: number;
  companyValuation: number;
}

export default function Clients() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [totalPages, setTotalPages] = useState(0);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [companyValuation, setCompanyValuation] = useState("");
  const queryClient = useQueryClient();
  const modalCreateRef = useRef<any>(null);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["clients", page, limit],
    queryFn: () =>
      fetch(
        `https://boasorte.teddybackoffice.com.br/users?page=${page}&limit=${limit}`
      ).then((res) => res.json()),
  });

  const createClientMutation = useMutation({
    mutationFn: async (newClient: CreateClientData) => {
      const response = await fetch(
        "https://boasorte.teddybackoffice.com.br/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClient),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar cliente");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      toast.success("Cliente criado com sucesso!");
      setName("");
      setSalary("");
      setCompanyValuation("");
      closeModalCreate();
    },
    onError: (error) => {
      console.error("Erro ao criar cliente:", error);
      toast.error("Erro ao criar cliente. Tente novamente.");
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      const clientsResponse = data as FetchResponse["data"];
      setTotalPages(clientsResponse.totalPages);
    }
  }, [isSuccess, data]);

  function createClient() {
    const newClientData: CreateClientData = {
      name: name,
      salary: Number(salary),
      companyValuation: Number(companyValuation),
    };

    createClientMutation.mutate(newClientData);
  }

  function openModalCreate() {
    modalCreateRef.current.showModal();
  }

  function closeModalCreate() {
    modalCreateRef.current.close();
  }

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
            <select
              onChange={(e) => setLimit(Number(e.target.value))}
              className="text-sm md:text-[18px] border rounded-sm border-teddy-gray"
            >
              {Array.from({ length: 100 }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 px-2.5 items-center">
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
      </div>

      <div className="mx-2.5">
        <button
          onClick={openModalCreate}
          disabled={createClientMutation.isPending}
          className="w-full max-w-[1180px] h-10 border-[2px] border-teddy-orange mt-5 mb-5 rounded-sm text-sm font-bold text-teddy-orange cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {createClientMutation.isPending ? "Criando..." : "Criar cliente"}
        </button>
      </div>

      <PaginationComponent
        pageCount={totalPages}
        onPageChange={handlePageClick}
      />

      <dialog
        ref={modalCreateRef}
        className="inset-0 m-auto bg-white w-[95%] md:w-full max-w-[400px] rounded-md p-5"
      >
        <div className="flex items-center justify-between mb-[15px]">
          <span className="font-bold ">Criar cliente:</span>
          <span className="cursor-pointer">
            <img src={Close} alt="Close" onClick={closeModalCreate} />
          </span>
        </div>

        <Input
          className="h-[40px] mb-2.5 placeholder:text-sm"
          placeholder="Digite o nome:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          value={name}
          variant="modal"
        />
        <Input
          className="h-[40px] mb-2.5 placeholder:text-sm"
          placeholder="Digite o salario:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSalary(e.target.value)
          }
          value={salary}
          variant="modal"
        />
        <Input
          className="h-[40px] mb-2.5 placeholder:text-sm"
          placeholder="Digite o valor da empresa:"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCompanyValuation(e.target.value)
          }
          value={companyValuation}
          variant="modal"
        />

        <BtnOrange
          title={"Criar cliente"}
          click={createClient}
          variant="modal"
        />
      </dialog>
    </div>
  );
}
