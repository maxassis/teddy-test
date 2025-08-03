/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Plus from "../assets/plus1.svg";
import Pen from "../assets/plus2.svg";
import Trash from "../assets/plus3.svg";
import Remove from "../assets/remove.svg";
import Close from "../assets/fechar.svg";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCardSelectionStore from "mfe-store/SelectedStore";
import BtnOrange from "mfe-design-system/ButtonOrange";
import Input from "mfe-design-system/Input";

interface CardProps {
  id: number;
  name: string;
  type: "client" | "selected";
  salary: number;
  companyValuation: number;
}

export default function Card({
  type,
  salary,
  companyValuation,
  name,
  id,
}: CardProps) {
  const [nameEdit, setNameEdit] = useState(name);
  const [salaryEdit, setSalaryEdit] = useState(salary + "");
  const [companySalaryEdit, setCompanySalaryEdit] = useState(
    companyValuation + ""
  );

  const [nameError, setNameError] = useState<string | null>(null);
  const [salaryError, setSalaryError] = useState<string | null>(null);
  const [companyValuationError, setCompanyValuationError] = useState<
    string | null
  >(null);

  const modalDeleteRef = useRef<any>(null);
  const modalEditRef = useRef<any>(null);
  const queryClient = useQueryClient();
  const { addCard, removeCard, selectedCards } = useCardSelectionStore();

  function closeModalDelete() {
    modalDeleteRef.current.close();
  }

  function openModalDelete() {
    modalDeleteRef.current.showModal();
  }

  function closeModalEdit() {
    modalEditRef.current.close();
    setNameError(null);
    setSalaryError(null);
    setCompanyValuationError(null);
  }

  function openModalEdit() {
    setNameEdit(name);
    setSalaryEdit(salary + "");
    setCompanySalaryEdit(companyValuation + "");
    setNameError(null);
    setSalaryError(null);
    setCompanyValuationError(null);
    modalEditRef.current.showModal();
  }

  function fetchEdit() {
    let hasError = false;

    if (nameEdit.trim() === "") {
      setNameError("O nome do cliente é obrigatório.");
      hasError = true;
    } else {
      setNameError(null);
    }

    if (salaryEdit.trim() === "" || isNaN(Number(salaryEdit))) {
      setSalaryError("O salário é obrigatório e deve ser um número.");
      hasError = true;
    } else {
      setSalaryError(null);
    }

    if (companySalaryEdit.trim() === "" || isNaN(Number(companySalaryEdit))) {
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

    mutate();
  }

  const handleNameEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameEdit(e.target.value);
    if (nameError && e.target.value.trim() !== "") {
      setNameError(null);
    }
  };

  const handleSalaryEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryEdit(e.target.value);
    if (
      salaryError &&
      e.target.value.trim() !== "" &&
      !isNaN(Number(e.target.value))
    ) {
      setSalaryError(null);
    }
  };

  const handleCompanySalaryEditChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanySalaryEdit(e.target.value);
    if (
      companyValuationError &&
      e.target.value.trim() !== "" &&
      !isNaN(Number(e.target.value))
    ) {
      setCompanyValuationError(null);
    }
  };

  function fetchDelete() {
    mutateDelete();
  }

  function selectCard() {
    if (selectedCards.some((card: any) => card.id === id)) {
      toast.error("Este cliente já foi selecionado.");
      return;
    }
    addCard({ id, name, salary, companyValuation });
    toast.success("Cliente selecionado com sucesso!");
  }

  function removeCardSelected() {
    removeCard(id);
    toast.success("Cliente removido com sucesso!");
  }

  const { mutate } = useMutation({
    mutationFn: () =>
      fetch(`https://boasorte.teddybackoffice.com.br/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameEdit,
          salary: +salaryEdit,
          companyValuation: +companySalaryEdit,
        }),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", id] });
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      modalEditRef.current.close();
      toast.success("Cliente editado com sucesso!");
    },
    onError: (error) => {
      console.error("Erro ao editar cliente:", error);
      toast.error("Erro ao editar cliente.", {
        description: "Tente novamente mais tarde.",
      });
    },
  });

  const { mutate: mutateDelete } = useMutation({
    mutationFn: () =>
      fetch(`https://boasorte.teddybackoffice.com.br/users/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (!res.ok) throw new Error("Erro ao deletar o cliente");
        return res.text();
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      modalDeleteRef.current.close();
      toast.success("Cliente deletado com sucesso!");
    },
    onError: (error) => {
      console.error("Erro ao deletar:", error);
      toast.error("Erro ao deletar cliente.", {
        description: "Verifique sua conexão ou tente novamente.",
      });
    },
  });

  return (
    <div className="md:max-w-[285px] w-full rounded-md bg-white p-4 shadow-sm justify-self-center">
      <strong className="text-center block mb-2">{name}</strong>

      <span className="text-center block mb-2 text-sm">Salário: {salary}</span>
      <span className="text-center block text-sm mb-[12px]">
        Empresa: {companyValuation}
      </span>

      <div className="flex justify-between items-center">
        {type === "client" && (
          <>
            <img
              src={Plus}
              alt="Plus"
              className="cursor-pointer"
              onClick={selectCard}
            />
            <img
              src={Pen}
              alt="Pen"
              className="cursor-pointer"
              onClick={openModalEdit}
            />
            <img
              src={Trash}
              alt="Trash"
              className="cursor-pointer"
              onClick={openModalDelete}
            />
          </>
        )}

        {type === "selected" && (
          <img
            src={Remove}
            alt="Remove"
            className="cursor-pointer ml-auto"
            onClick={removeCardSelected}
          />
        )}
      </div>

      <dialog
        ref={modalDeleteRef}
        className="inset-0 m-auto bg-white w-[95%] md:w-full max-w-[400px] rounded-md p-5"
      >
        <div className="flex items-center justify-between">
          <span className="font-bold">Excluir cliente:</span>
          <span className="cursor-pointer">
            <img
              src={Close}
              alt="Close"
              onClick={closeModalDelete}
              id="close-modal-delete"
            />
          </span>
        </div>

        <span className="my-[15px] block">
          Você está prestes a excluir o cliente: <strong>{name}</strong>
        </span>

        <BtnOrange
          title={"Excluir cliente"}
          className="md:text-sm font-bold h-[40px]"
          variant="modal"
          click={fetchDelete}
        />
      </dialog>

      <dialog
        ref={modalEditRef}
        className="inset-0 m-auto bg-white w-[95%] md:w-full max-w-[400px] rounded-md p-5"
      >
        <div className="flex items-center justify-between mb-[15px]">
          <span className="font-bold">Editar cliente:</span>
          <span className="cursor-pointer">
            <img src={Close} alt="Close" onClick={closeModalEdit} />
          </span>
        </div>

        <Input
          placeholder="Digite o nome"
          className={`h-[40px] mb-2.5 placeholder:text-sm ${
            nameError ? "!border-red-500" : ""
          }`}
          value={nameEdit}
          onChange={handleNameEditChange}
          variant="modal"
        />
        {nameError && (
          <p className="text-red-500 text-[11px] relative bottom-2.5 -mt-1">
            {nameError}
          </p>
        )}

        <Input
          placeholder="Digite o salário"
          className={`h-[40px] mb-2.5 placeholder:text-sm ${
            salaryError ? "!border-red-500" : ""
          }`}
          value={salaryEdit}
          onChange={handleSalaryEditChange}
          variant="modal"
        />
        {salaryError && (
          <p className="text-red-500 text-[11px]  relative bottom-2.5 -mt-1">
            {salaryError}
          </p>
        )}

        <Input
          placeholder="Digite o valor da empresa"
          className={`h-[40px] mb-[15px] placeholder:text-sm ${
            companyValuationError ? "!border-red-500" : ""
          }`}
          value={companySalaryEdit}
          onChange={handleCompanySalaryEditChange}
          variant="modal"
        />
        {companyValuationError && (
          <p className="text-red-500 text-[11px] relative bottom-[14px]">
            {companyValuationError}
          </p>
        )}

        <BtnOrange
          title={"Editar cliente"}
          className="md:text-sm font-bold h-[40px]"
          variant="modal"
          click={fetchEdit}
        />
      </dialog>
    </div>
  );
}
