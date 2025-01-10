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
  const [productsArray, setProductsArray] = React.useState([]);

  React.useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProductsArray(savedProducts);
  }, []);

  const saveProduct = () => {
    const newProduct = { ...product, id: Date.now() };
    const updatedProducts = [...productsArray, newProduct];

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProductsArray(updatedProducts);

    setProduct({
      name: "",
      description: "",
      category: "",
      price: "",
      status: "",
      image: null,
    });
  };

  const deleteProduct = (id) => {
    const updatedProducts = productsArray.filter((prod) => prod.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProductsArray(updatedProducts);
  };

  const updateProduct = (id) => {
    const selectedProduct = productsArray.find((prod) => prod.id === id);
    setProduct(selectedProduct);
    setModalState(!modalState);
    deleteProduct(id);
  };

  const resetValues = () => {
    localStorage.clear();
    setProductsArray([]);
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
        productsArray,
        resetValues,
        deleteProduct,
        updateProduct,
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
