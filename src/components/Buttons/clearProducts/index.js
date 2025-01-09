"use client";

import React from "react";
import Image from "next/image";
import { useRegisterContext } from "@/context/RegisterModalContext";
import { useScreenWidth } from "@/context/ScreenWidthContext";

export default function ClearProductsList({ isResponsible }) {
  const { resetValues } = useRegisterContext();

  const windowWidth = useScreenWidth();

  return (
    <button
      onClick={resetValues}
      className={`flex gap-3 max-h-[max-content] items-center ${
        windowWidth > 540 ? "p-3" : "p-2"
      } border border-red-500 max-w-[max-content] rounded-[4px] text-red-500 xsm:text-sm text-xs  font-medium`}
    >
      {windowWidth < 840
        ? !isResponsible
          ? "Resetar Lista"
          : ""
        : "Resetar Lista"}
      <Image
        src="trash-red.svg"
        alt="Deletar icon."
        width={windowWidth < 540 ? 18 : 20}
        height={windowWidth < 540 ? 18 : 20}
      />
    </button>
  );
}
