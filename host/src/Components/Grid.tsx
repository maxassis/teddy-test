export default function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 px-2.5 items-center">
      {children}
    </div>
  );
}
