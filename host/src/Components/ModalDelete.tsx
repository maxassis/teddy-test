/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

export default function ModalDelete() {
  const modalRef = useRef<any>(null);

  function openModal() {
    modalRef.current.showModal();
  }

  function closeModal() {
    modalRef.current.close();
  }

  return (
    <div>
      <button onClick={openModal}>Open</button>
      <dialog ref={modalRef}>
        <h1>Title</h1>
        <p>Info</p>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </div>
  );
}
