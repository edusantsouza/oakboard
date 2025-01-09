"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

const RegisterContext = createContext();

export function RegisterControllerProvider({ children }) {
  const [modalState, setModalState] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    status: "",
    image: null,
  });
  const [products, setProducts] = useState([]);

  // Carregar os produtos do localStorage apenas no cliente
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const saveProduct = () => {
    const newProduct = { ...product, id: Date.now() }; // Adicionando um ID único
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
  const context = useContext(RegisterContext);

  if (context === undefined) {
    throw new Error(
      "useRegisterContext deve ser usado dentro de um RegisterContextProvider",
    );
  }

  return context;
};
