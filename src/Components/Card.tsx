import Plus from "../assets/plus1.svg";
import Pen from "../assets/plus2.svg";
import Trash from "../assets/plus3.svg";

export default function Card() {
  return (
    <div className="max-w-[285px] w-full h-[140px] rounded-md bg-white pt-2.5 pb-2 px-5 shadow-sm">
      <strong className="text-center block mb-2">Eduardo</strong>

      <span className="text-center block mb-2 text-sm">
        Salário: R$3.500,00
      </span>
      <span className="text-center block text-sm mb-[12px]">
        Empresa: R$120.000,00
      </span>

      <div className="flex justify-between items-center">
        <img src={Plus} alt="Plus" className="cursor-pointer" />
        <img src={Pen} alt="Pen" className="cursor-pointer" />
        <img src={Trash} alt="Trash" className="cursor-pointer" />
      </div>
    </div>
  );
}
