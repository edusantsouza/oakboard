"use client";

import React from "react";

const ProductsControllerContext = React.createContext();

export const ProductsContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  return (
    <ProductsControllerContext.Provider
      value={{
        clearSearch,
        handleSearch,
        searchValue,
      }}
    >
      {children}
    </ProductsControllerContext.Provider>
  );
};

export const useProductsController = () => {
  const context = React.useContext(ProductsControllerContext);

  if (context === undefined) {
    throw new Error(
      "useProductxController deve ser usado dentro de um ProductxContextProvider",
    );
  }
  return context;
};
