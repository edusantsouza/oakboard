"use client";

import React from "react";
import Image from "next/image";
import RegisterActions from "@/components/Buttons/RegisterActions";
import { useRegisterContext } from "@/context/RegisterModalContext";

export default function RegisterProduct() {
  //criar o contexto que controla as notificações e a abertura/fechamento do modal
  //colocar toda a a parte de cadastro de produto no productcontext e trazer as informações pra cá
  const { modalState, handleModal, saveProduct, setProduct, product } =
    useRegisterContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      alert("Por favor, preencha os campos obrigatórios!");
      return;
    }
    saveProduct();
    handleModal();
  };

  const cancelRegister = () => {
    console.log("cadastro cancelado");
    handleModal();
  };

  const modalController = () => {
    if (modalState) {
      return (
        <div className="wrapper overflow-scroll pt-[200px] p-6 md:overflow-auto fixed inset-0 z-50 flex items-center justify-center bg-[var(--backdrop-color)] text-white backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--green-600)] flex flex-col justify-between w-full md:max-w-[990px]  md:min-h-[500px] rounded-lg  py-6"
          >
            <h1 className="px-4 text-lg md:text-2xl  mb-8">
              Cadastre um novo produto
            </h1>
            <div className="flex flex-col md:flex-row justify-start items-start">
              <div className="flex flex-col gap-10 p-3 md:p-4 w-full h-full">
                <div className="flex flex-row md:flex-col gap-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm text-[var(--white-100)] font-semibold"
                    >
                      Nome do Produto
                    </label>
                    <input
                      className="bg-[var(--green-500)] p-3 col-start-1 col-end-1 row-start-1 row-end-1 rounded-[4px] text-xs md:text-sm focus:outline-[var(--green-100)] focus:outline-dotted placeholder:text-[var(--grey-50)] placeholder:text-sm w-full max-w-[280px]"
                      type="text"
                      name="name"
                      id="name"
                      value={product.name}
                      onChange={handleChange}
                      placeholder="Ex: Camiseta de anime One Piece"
                      required
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <label
                      htmlFor="price"
                      className="text-sm text-[var(--white-100)] font-semibold"
                    >
                      Preço
                    </label>
                    <div className="flex gap-2 items-center justify-start">
                      <span className="text-base text-[var(--white-100)] font-semibold">
                        R$
                      </span>
                      <input
                        className="appearance-none bg-[var(--green-500)] p-2 col-start-1 col-end-1 row-start-1 row-end-1 rounded-[4px] text-xs md:text-sm focus:outline-[var(--green-100)] focus:outline-dotted placeholder:text-sm placeholder:text-[var(--grey-50)] max-w-[100px] w-full"
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Ex: 149.90"
                        value={product.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                  <label
                    htmlFor="description"
                    className="text-sm text-[var(--white-100)] font-semibold"
                  >
                    Descrição
                  </label>
                  <textarea
                    className="bg-[var(--green-500)] p-3 col-start-1 col-end-1 row-start-1 row-end-1 rounded-[4px] text-xs md:text-sm focus:outline-[var(--green-100)] focus:outline-dotted placeholder:text-sm placeholder:text-[var(--grey-50)] resize-none overflow-hidden w-full h-[120px]"
                    name="description"
                    id="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Ex: Feitas em 100% algodão, as nossas camisetas vestem bem e são super confortáveis..."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-10 p-3 md:p-4  w-full max-w-[250px]">
                <div className="flex flex-col items-start justify-center gap-2">
                  <label
                    htmlFor="category"
                    className="text-sm text-[var(--white-100)] font-semibold"
                  >
                    Categoria
                  </label>
                  <select
                    className="bg-[var(--green-500)] p-3 col-start-1 col-end-1 row-start-1 row-end-1 rounded-[4px] text-xs md:text-sm focus:outline-[var(--green-100)] focus:outline-dotted placeholder:text-sm placeholder:text-[var(--grey-50)] w-full max-w-[200px]"
                    id="category"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione uma categoria</option>

                    <option value="Camisetas">Camisetas</option>
                    <option value="Calças">Calças</option>
                    <option value="Bonés">Bonés</option>
                  </select>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                  <label
                    htmlFor="status"
                    className="text-sm text-[var(--white-100)] font-semibold"
                  >
                    Status
                  </label>
                  <select
                    className="bg-[var(--green-500)] p-3 col-start-1 col-end-1 row-start-1 row-end-1 rounded-[4px] text-xs md:text-sm focus:outline-[var(--green-100)] focus:outline-dotted placeholder:text-[var(--grey-50)] w-full max-w-[200px]"
                    id="status"
                    name="status"
                    value={product.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um status</option>
                    <option value="Disponível">Em estoque</option>
                    <option value="Indisponível">Indisponível</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-center h-full w-full p-4">
                <label
                  htmlFor="image"
                  className="cursor-not-allowed bg-[var(--green-400)] opacity-70 text-[var(--white-100)] px-3 py-2 rounded-lg  transition-all w-full h-[200px] md:h-[300px] flex justify-center items-center flex-col gap-4 "
                >
                  <Image
                    src="image.svg"
                    alt="Image icon."
                    width={60}
                    height={40}
                  />
                  <span className="text-sm text-center font-semibold">
                    Em breve...
                  </span>
                </label>
                {/* <input
                  className="hidden"
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                /> */}
              </div>
            </div>
            <RegisterActions cancelRegister={cancelRegister} />
          </form>
        </div>
      );
    }
    return;
  };

  return modalController();
}
