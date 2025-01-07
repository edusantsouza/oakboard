import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container w-full flex flex-col justify-center items-center">
      <Image
        src="empty.svg"
        alt="Página em construção"
        width={600}
        height={370}
      />

      <span className="text-xl md:text-4xl font-bold mt-6">404</span>
      <h1 className="text-[var(--white-100)] text-sm md:text-xl mt-1">
        Página Não Encontrada
      </h1>

      <Link
        href={"/"}
        className=" px-4 py-3 md:px-6 md:py-3 mt-12 text-[var(--white-100)] font-medium bg-[var(--green-150)] rounded-md transition-all hover:bg-[var(--green-200)] text-xs md:text-base"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
