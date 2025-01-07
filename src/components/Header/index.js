"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMenu } from "@/context/MenuContext";
import { useScreenWidth } from "@/context/ScreenWidthContext";

export default function Header() {
  const { toggleMenu, setMenuController } = useMenu();

  const windowWidth = useScreenWidth();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMenu = (e) => {
        if (!e.target.closest("[data-menu]")) {
          setMenuController(false);
        }
      };

      window.addEventListener("click", handleMenu);
      return () => {
        window.removeEventListener("click", handleMenu());
      };
    }
  }, []);

  // const handleButtonClick = (e) => {
  //   e.stopPropagation();
  //   toggleMenu();
  // };

  return (
    <header className="flex justify-between p-4 md:p-8 w-full m-auto">
      {windowWidth > 769 ? (
        <Link href="/" className="flex">
          <Image
            alt="Oakboard Logo"
            src="/oaklogo.svg"
            width={120}
            height={40}
          />
        </Link>
      ) : (
        <Image
          // onClick={handleButtonClick}
          alt="Menu Icon"
          src="/menu.svg"
          width={38}
          height={38}
          className="menu_btn cursor-pointer"
          data-menu
        />
      )}

      <div className="header_options max-w-[200px] flex justify-end gap-6 w-full ">
        <div className="notifications rounded-full w-11 h-11 p-2 flex place-content-center bg-[var(--green-500)] cursor-pointer transition-all duration-300 hover:bg-[var(--green-200)]">
          <Image
            alt="Ícone de notificações"
            src="/notifications.svg"
            width={24}
            height={24}
          />
        </div>

        <div className="login  gap-2 w-[max-content] md:w-[140px] flex items-center cursor-pointer ">
          <Image
            alt="Foto de perfil"
            src="/oak.png"
            width={32}
            height={32}
            className="w-10 h-10"
          />

          <div className="profile_info w-12 hidden flex-col gap-1 md:flex">
            <span className="name text-xs w-[80px] font-semibold">
              Eduardo Sant
            </span>
            <span className="role text-xs">Administrador</span>
          </div>
        </div>
      </div>
    </header>
  );
}
