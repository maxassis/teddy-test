import Card from "./Card";
import Grid from "mfe-design-system/Grid";
// import Grid from "./Grid";
import { useCardSelectionStore } from "../store/selected-store";

export default function ClientsSelect() {
  const { selectedCards, clearSelectedCards } = useCardSelectionStore();

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
              onClick={clearSelectedCards}
              className="ml-2 cursor-pointer"
            >
              Limpar todos
            </button>
          )}
        </div>
      </div>

      {selectedCards.length > 0 ? (
        <Grid>
          {selectedCards.map((card, index) => (
            <Card {...card} type="selected" key={index} />
          ))}
        </Grid>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Não há clientes selecionados.
        </p>
      )}
    </div>
  );
}
