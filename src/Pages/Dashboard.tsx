import Card from "../Components/Card";
import Header from "../Components/Header";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-[#F5F5F5]">
      <Header />

      <div className="max-w-[1200px] w-full h-[705px] mx-auto mt-[30px]">
        <div className="flex-1 px-2.5 mb-2.5">
          <div className="flex items-center justify-between">
            <span>
              <strong>16</strong> clientes encontrados
            </span>
            <div className="flex items-center gap-2">
              <span>Clientes por página:</span>
              <div>16</div>
            </div>
          </div>
        </div>

        <Card />
      </div>
    </div>
  );
}
