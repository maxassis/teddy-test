import Card from "./Card";
import Grid from "./Grid";
import { useCardSelectionStore } from "../store/selected-store";

export default function ClientsSelect() {
  const { selectedCards } = useCardSelectionStore();

  return (
    <div className="max-w-[1200px] w-full mx-auto mt-[30px] flex-1">
      <div className="flex-1 px-2.5 mb-2.5">
        <div className="flex items-center justify-between">
          <span>
            <strong className="text-[22px]">Clientes selecionados:</strong>
          </span>
        </div>
      </div>

      <Grid>
        {selectedCards.map((card, index) => (
          <Card {...card} type="selected" key={index} />
        ))}

        {/* <Card type="selected" /> */}
      </Grid>
    </div>
  );
}
