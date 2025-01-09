import Image from "next/image";

export default function App() {
  return (
    <div className="container w-full flex flex-col gap-6 justify-center items-center">
      <Image
        src="empty.svg"
        alt="Página em construção"
        width={600}
        height={370}
      />
      <h1 className="text-[var(--white-100)] font-semibold text-sm md:text-xl">
        Página em construção...
      </h1>
    </div>
  );
}
