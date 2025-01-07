"use client";

import React from "react";

const ScreenWidthContext = React.createContext();

export const ScreenWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={windowWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export const useScreenWidth = () => {
  const context = React.useContext(ScreenWidthContext);
  if (context === undefined) {
    throw new Error(
      "useScreenWidth deve ser usado dentro de um ScreenWidthProvider",
    );
  }
  return context;
};
