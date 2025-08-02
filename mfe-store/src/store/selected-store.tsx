import { create } from "zustand";
import { toast } from "sonner";
import { persist } from "zustand/middleware";

interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

interface CardSelectionState {
  selectedCards: Client[];
  addCard: (card: Client) => void;
  removeCard: (cardId: number) => void;
  clearSelectedCards: () => void;
}

export const useCardSelectionStore = create<CardSelectionState>()(
  persist(
    (set) => ({
      selectedCards: [],
      addCard: (card) =>
        set((state) => {
          if (
            !state.selectedCards.some(
              (existingCard) => existingCard.id === card.id
            )
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
            selectedCards: state.selectedCards.filter(
              (card) => card.id !== cardId
            ),
          };
        }),
      clearSelectedCards: () =>
        set({
          selectedCards: [],
        }),
    }),
    {
      name: "selected-cards-storage",
    }
  )
);
