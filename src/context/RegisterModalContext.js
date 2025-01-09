"use client";

import React from "react";

const RegisterContext = React.createContext();

export function RegisterControllerProvider({ children }) {
  const [modalState, setModalState] = React.useState(false);
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    category: "",
    price: "",
    status: "",
    image: null,
  });
  const [products, setProducts] = React.useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  const saveProduct = () => {
    const newProduct = { ...product, id: Date.now() };
    const updatedProducts = [...products, newProduct];

    // Atualizar o localStorage e o estado
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    // Resetar o produto
    setProduct({
      name: "",
      description: "",
      category: "",
      price: "",
      status: "",
      image: null,
    });
  };

  const handleModal = () => {
    setModalState(!modalState);
  };

  return (
    <RegisterContext.Provider
      value={{
        handleModal,
        modalState,
        saveProduct,
        setProduct,
        product,
        products, // Compartilhando a lista de produtos
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegisterContext = () => {
  const context = React.useContext(RegisterContext);

  if (context === undefined) {
    throw new Error(
      "useRegisterContext deve ser usado dentro de um RegisterContextProvider",
    );
  }

  return context;
};
