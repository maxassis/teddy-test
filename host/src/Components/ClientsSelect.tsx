import { toast } from "sonner";
import Card from "./Card";
import useCardSelectionStore from "mfe-store/SelectedStore";

interface Card {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

export default function ClientsSelect() {
  const { selectedCards, clearSelectedCards } = useCardSelectionStore();

  function handleClearSelectedCards() {
    clearSelectedCards();
    toast.success("Todos os clientes foram removidos com sucesso!");
  }

  return (
    <div className="max-w-[1200px] w-full mx-auto mt-[30px] flex-1">
      <div className="flex-1 px-2.5 mb-2.5">
        <div className="flex items-center justify-between">
          <span>
            <strong className="text-[22px]">
              Clientes selecionados:{" "}
              {selectedCards.length > 0 ? selectedCards.length : 0}
            </strong>
          </span>
          {selectedCards.length > 0 && (
            <button
              onClick={handleClearSelectedCards}
              className="ml-2 cursor-pointer"
            >
              <span className="underline">Limpar todos</span>
            </button>
          )}
        </div>
      </div>

      {selectedCards.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 px-2.5 items-center">
          {selectedCards.map((card: Card, index: number) => (
            <Card {...card} type="selected" key={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Não há clientes selecionados.
        </p>
      )}
    </div>
  );
}
