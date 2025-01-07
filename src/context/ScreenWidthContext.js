"use client";

import React from "react";

const ScreenWidthContext = React.createContext();

export const ScreenWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = React.useState(0);

  // React.useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     handleResize();

  //     const handleResize = () => {
  //       setWindowWidth(window.innerWidth);
  //     };

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }
  // }, []);

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
