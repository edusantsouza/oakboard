"use client";

import React, { useContext } from "react";

const MenuContext = React.createContext();

export function MenuProvider({ children }) {
  const [menuController, setMenuController] = React.useState(false);

  const toggleMenu = () => {
    setMenuController((prev) => !prev);
  };

  return (
    <MenuContext.Provider
      value={{ setMenuController, menuController, toggleMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
