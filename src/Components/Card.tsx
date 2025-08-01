/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Plus from "../assets/plus1.svg";
import Pen from "../assets/plus2.svg";
import Trash from "../assets/plus3.svg";
import Remove from "../assets/remove.svg";
import Button from "./Button";
import Close from "../assets/fechar.svg";
import Input from "./Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

  const modalDeleteRef = useRef<any>(null);
  const modalEditRef = useRef<any>(null);
  const queryClient = useQueryClient();

  function closeModalDelete() {
    modalDeleteRef.current.close();
  }

  function openModalDelete() {
    modalDeleteRef.current.showModal();
  }

  function closeModalEdit() {
    modalEditRef.current.close();
  }

  function openModalEdit() {
    modalEditRef.current.showModal();
  }

  function fetchEdit() {
    mutate();
  }

  function fetchDelete() {
    mutateDelete();
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
    },
    onError: (error) => {
      console.error("Erro ao deletar:", error);
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
            <img src={Plus} alt="Plus" className="cursor-pointer" />
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
            onClick={openModalDelete}
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
            <img src={Close} alt="Close" onClick={closeModalDelete} />
          </span>
        </div>

        <span className="my-[15px] block">
          Você está prestes a excluir o cliente: <strong>{name}</strong>
        </span>

        <Button
          title={"Excluir cliente"}
          className="md:text-sm font-bold h-[40px]"
          click={fetchDelete}
        />
      </dialog>

      <dialog
        ref={modalEditRef}
        className="inset-0 m-auto bg-white w-[95%] md:w-full max-w-[400px] rounded-md p-5"
      >
        <div className="flex items-center justify-between">
          <span className="font-bold mb-[15px]">Editar cliente:</span>
          <span className="cursor-pointer">
            <img src={Close} alt="Close" onClick={closeModalEdit} />
          </span>
        </div>

        <Input
          placeholder="Digite o nome"
          className="h-[40px] mb-2.5 placeholder:text-base md:placeholder:base"
          valueData={nameEdit}
          onChange={(e) => setNameEdit(e.target.value)}
        />
        <Input
          placeholder="Digite o salário"
          className="h-[40px] mb-2.5 placeholder:text-base md:placeholder:base"
          valueData={salaryEdit}
          onChange={(e) => setSalaryEdit(e.target.value)}
        />
        <Input
          placeholder="Digite o valor da empresa"
          className="h-[40px] mb-[15px] placeholder:text-base md:placeholder:base"
          valueData={companySalaryEdit}
          onChange={(e) => setCompanySalaryEdit(e.target.value)}
        />

        <Button
          title={"Editar cliente"}
          className="md:text-sm font-bold h-[40px]"
          click={fetchEdit}
        />
      </dialog>
    </div>
  );
}
