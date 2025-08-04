/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react";
import PaginationComponent from "mfe-design-system/Pagination";
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

  const [nameError, setNameError] = useState<string | null>(null);
  const [salaryError, setSalaryError] = useState<string | null>(null);
  const [companyValuationError, setCompanyValuationError] = useState<
    string | null
  >(null);

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
    let hasError = false;

    if (name.trim() === "") {
      setNameError("O nome do cliente é obrigatório.");
      hasError = true;
    } else {
      setNameError(null);
    }

    if (salary.trim() === "" || isNaN(Number(salary))) {
      setSalaryError("O salário é obrigatório e deve ser um número.");
      hasError = true;
    } else {
      setSalaryError(null);
    }

    if (companyValuation.trim() === "" || isNaN(Number(companyValuation))) {
      setCompanyValuationError(
        "O valor da empresa é obrigatório e deve ser um número."
      );
      hasError = true;
    } else {
      setCompanyValuationError(null);
    }

    if (hasError) {
      return;
    }

    const newClientData: CreateClientData = {
      name: name,
      salary: Number(salary),
      companyValuation: Number(companyValuation),
    };

    createClientMutation.mutate(newClientData);
  }

  function openModalCreate() {
    setName("");
    setSalary("");
    setCompanyValuation("");
    setNameError(null);
    setSalaryError(null);
    setCompanyValuationError(null);
    modalCreateRef.current.showModal();
  }

  function closeModalCreate() {
    setName("");
    setSalary("");
    setCompanyValuation("");
    setNameError(null);
    setSalaryError(null);
    setCompanyValuationError(null);
    modalCreateRef.current.close();
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (nameError && e.target.value.trim() !== "") {
      setNameError(null);
    }
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value);
    if (
      salaryError &&
      e.target.value.trim() !== "" &&
      !isNaN(Number(e.target.value))
    ) {
      setSalaryError(null);
    }
  };

  const handleCompanyValuationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyValuation(e.target.value);
    if (
      companyValuationError &&
      e.target.value.trim() !== "" &&
      !isNaN(Number(e.target.value))
    ) {
      setCompanyValuationError(null);
    }
  };

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
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="text-sm md:text-[18px] border rounded-sm border-teddy-gray pl-2 w-[50px]"
            >
              {Array.from({ length: 99 }, (_, index) => (
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
          <span
            className="cursor-pointer"
            onClick={closeModalCreate}
            id="close-modal-create"
          >
            <img src={Close} alt="Close" />
          </span>
        </div>

        <Input
          className={`h-[40px] mb-2.5 placeholder:text-sm ${
            nameError ? "!border-red-500" : ""
          }`}
          placeholder="Digite o nome:"
          onChange={handleNameChange}
          value={name}
          variant="modal"
        />
        {nameError && (
          <p className="text-red-500 text-[11px] relative bottom-3.5">
            {nameError}
          </p>
        )}

        <Input
          className={`h-[40px] mb-2.5 placeholder:text-sm ${
            salaryError ? "!border-red-500" : ""
          }`}
          placeholder="Digite o salario:"
          onChange={handleSalaryChange}
          value={salary}
          variant="modal"
        />
        {salaryError && (
          <p className="text-red-500 text-[11px] relative bottom-3.5">
            {salaryError}
          </p>
        )}

        <Input
          className={`h-[40px] mb-2.5 placeholder:text-sm ${
            companyValuationError ? "!border-red-500" : ""
          }`}
          placeholder="Digite o valor da empresa:"
          onChange={handleCompanyValuationChange}
          value={companyValuation}
          variant="modal"
        />
        {companyValuationError && (
          <p className="text-red-500 text-[11px] relative bottom-3.5">
            {companyValuationError}
          </p>
        )}

        <BtnOrange
          title={"Criar cliente"}
          click={createClient}
          variant="modal"
        />
      </dialog>
    </div>
  );
}
