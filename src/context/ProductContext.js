"use client";

import React from "react";

const ProductControllerContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
  const products = [
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Camiseta Dragon Ball",
      id: 1,
      price: 49.99,
      category: "Roupas",
      status: "Indisponível",
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Funko Pop Naruto",
      id: 2,
      price: 89.9,
      category: "Colecionáveis",
      status: "Em Estoque",
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Manga Attack on Titan",
      id: 3,
      price: 35.0,
      category: "Livros",
      status: "Indisponível",
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Poster My Hero Academia",
      id: 4,
      price: 25.0,
      category: "Decoração",
      status: "Indisponível",
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Moeda de Ouro One Piece",
      id: 5,
      price: 120.0,
      category: "Colecionáveis",
      status: "Em Estoque",
    },
  ];

  const [searchValue, setSearchValue] = React.useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  const filteredProducts = products
    .filter((item) =>
      item.product.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .sort((a, b) => a.price - b.price);

  return (
    <ProductControllerContext.Provider
      value={{
        clearSearch,
        handleSearch,
        searchValue,
        filteredProducts,
        products,
      }}
    >
      {children}
    </ProductControllerContext.Provider>
  );
};

export const useProductController = () => {
  const context = React.useContext(ProductControllerContext);

  if (context === undefined) {
    throw new Error(
      "useProductController deve ser usado dentro de um ProductContextProvider",
    );
  }
  return context;
};
