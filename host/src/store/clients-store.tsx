import { create } from "zustand";

interface ClientsState {
  typeClient: "clients" | "selected";
  setClient: () => void;
  setSelected: () => void;
}

const useClientStore = create<ClientsState>((set) => ({
  typeClient: "clients",
  setClient: () => set({ typeClient: "clients" }),
  setSelected: () => set({ typeClient: "selected" }),
}));

export default useClientStore;
