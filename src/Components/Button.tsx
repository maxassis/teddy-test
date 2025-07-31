export default function Button({ title }: { title: string }) {
  return (
    <button className="bg-teddy-orange w-full h-[60px] text-white font-bold text-xl md:text-2xl rounded-[4px] cursor-pointer ">
      {title}
    </button>
  );
}
