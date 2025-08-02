import { create } from "zustand";
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

const useCardSelectionStore = create<CardSelectionState>()(
  persist(
    (set) => ({
      selectedCards: [],
      addCard: (card) =>
        set((state) => ({
          selectedCards: [...state.selectedCards, card],
        })),
      removeCard: (cardId) =>
        set((state) => {
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

export default useCardSelectionStore;
