import { create } from "zustand";
import type { Client } from "../Components/Clients.tsx";
import { toast } from "sonner";

interface CardSelectionState {
  selectedCards: Client[];
  addCard: (card: Client) => void;
  removeCard: (cardId: number) => void;
}

export const useCardSelectionStore = create<CardSelectionState>((set) => ({
  selectedCards: [],
  addCard: (card) =>
    set((state) => {
      if (
        !state.selectedCards.some((existingCard) => existingCard.id === card.id)
      ) {
        toast.success("Cliente selecionado com sucesso!");
        return { selectedCards: [...state.selectedCards, card] };
      } else {
        toast.error("Este cliente já foi selecionado.");
      }
      return state;
    }),
  removeCard: (cardId) =>
    set((state) => {
      toast.success("Cliente removido com sucesso!");
      return {
        selectedCards: state.selectedCards.filter((card) => card.id !== cardId),
      };
    }),
}));
