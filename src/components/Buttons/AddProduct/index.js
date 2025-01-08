import Image from "next/image";
import { useScreenWidth } from "@/context/ScreenWidthContext";
import React from "react";

export default function AddProductBtn({ isResponsible }) {
  const windowWidth = useScreenWidth();

  return (
    <button
      onClick={() => {
        console.log(isResponsible);
      }}
      className={`flex gap-3 max-h-[max-content] items-center ${
        windowWidth > 540 ? "p-3" : "p-2"
      } border border-[var(--green-100)] max-w-[max-content] rounded-[4px] text-[var(--green-100)] xsm:text-sm text-xs  font-medium`}
    >
      {windowWidth < 840
        ? !isResponsible
          ? "Cadastrar novo produto"
          : ""
        : "Cadastrar novo produto"}
      <Image
        src="adicionar.svg"
        alt="Adicionar icon."
        width={windowWidth < 540 ? 18 : 21}
        height={windowWidth < 540 ? 18 : 21}
      />
    </button>
  );
}
