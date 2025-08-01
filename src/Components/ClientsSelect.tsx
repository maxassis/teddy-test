import Card from "./Card";
import Grid from "./Grid";

export default function ClientsSelect() {
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
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
        <Card type="selected" />
      </Grid>
    </div>
  );
}
