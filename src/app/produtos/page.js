"use client";

import React from "react";
import Image from "next/image";
import { useScreenWidth } from "@/context/ScreenWidthContext";

export default function Produtos() {
  const windowWidth = useScreenWidth();

  const [searchValue, setSearchValue] = React.useState("");

  const products = [
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Camiseta Dragon Ball",
      id: 1,
      price: 49.99,
      category: "Roupas",
      status: "Em Estoque",
      position: 1,
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Funko Pop Naruto",
      id: 2,
      price: 89.9,
      category: "Colecionáveis",
      status: "Em Estoque",
      position: 2,
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Manga Attack on Titan",
      id: 3,
      price: 35.0,
      category: "Livros",
      status: "Fora de Estoque",
      position: 3,
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Poster My Hero Academia",
      id: 4,
      price: 25.0,
      category: "Decoração",
      status: "Em Estoque",
      position: 4,
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Moeda de Ouro One Piece",
      id: 5,
      price: 120.0,
      category: "Colecionáveis",
      status: "Em Estoque",
      position: 5,
    },
    {
      image:
        "https://menerfa.com.br/wp-content/uploads/2024/04/black_yasuo-2048x1820.png",
      product: "Camiseta Fate/Stay",
      id: 6,
      price: "49,90",
      category: "Roupas",
      status: "Em Estoque",
      position: 6,
    },
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  const filteredProducts = products.filter((item) =>
    item.product.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="header_produtos flex w-full justify-between">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div
            className={`search_field grid grid-cols-[1fr] ${
              windowWidth > 540 ? "grid-rows-[45px]" : "grid-rows-[40px]"
            }`}
          >
            <label className="hidden" htmlFor="search">
              Pesquise por um produto
            </label>
            <input
              onChange={handleSearch}
              className={`${
                windowWidth > 540 ? "w-[300px]" : "w-[200px]"
              } bg-[var(--green-600)] p-2 col-start-1 col-end-1 row-start-1 row-end-1 rounded-[4px] text-xs md:text-sm focus:outline-[var(--green-100)] focus:outline-dotted placeholder:text-[var(--grey-50)]`}
              type="text"
              name="search"
              id="search"
              value={searchValue}
              placeholder="Pesquise por um produto..."
            />
            <button className="col-start-1 col-end-1 row-start-1 row-end-1 self-center place-self-end p-3 hover:opacity-90">
              {searchValue ? (
                <Image
                  src="clear.svg"
                  alt="Ícone de limpar a pesquisa"
                  width={24}
                  height={24}
                  onClick={clearSearch}
                />
              ) : (
                <Image
                  src="search.svg"
                  alt="Ícone de Pesquisa"
                  width={24}
                  height={24}
                  onClick={(e) => e.preventDefault()}
                />
              )}
            </button>
          </div>
        </form>

        <button
          className={`flex gap-3 max-h-[max-content] ${
            windowWidth > 540 ? "p-3" : "p-2"
          } border border-[var(--green-100)] rounded-[4px] text-[var(--green-100)] text-sm font-medium`}
        >
          {windowWidth > 840 ? "Cadastrar novo produto" : ""}
          <Image
            src="adicionar.svg"
            alt="Adicionar icon."
            width={21}
            height={21}
          />
        </button>
      </div>

      <div className="flex flex-col w-full gap-2 mt-4 ">
        <div className="hidden xsm:grid table_head grid-cols-5 items-center bg-[var(--green-600)] px-2 py-3 mb-4 ">
          <span className="text-sm font-semibold justify-self-center">
            Produto
          </span>
          {/* <span className="text-sm text-center font-semibold justify-self-center">
            ID
          </span> */}
          <span className="text-sm font-semibold justify-self-center">
            Preço
          </span>
          <span className="text-sm font-semibold justify-self-center">
            Categoria
          </span>
          <span className="text-sm font-semibold justify-self-center">
            Status
          </span>
          <span className="text-sm font-semibold justify-self-center">
            Ações
          </span>
        </div>
        {searchValue && filteredProducts.length === 0 ? (
          <p className="text-center font-semibold text-[var(--white-100)] mt-6">
            Nenhum resultado encontrado para{" "}
            <span className="text-[var(--green-100)]">"{searchValue}"</span>.
          </p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className={`p-4 ${
                item.position % 2 !== 0 ? "bg-[var(--green-600)]" : ""
              } rounded grid grid-cols-2 gap-4 items-center xsm:grid-cols-5 grid-rows-2 xsm:grid-rows-1`}
            >
              <h2 className="text-xs md:text-sm flex flex-wrap  xsm:flex-nowrap  items-center gap-2 justify-self-start ">
                <Image
                  src={item.image}
                  alt="Imagem do produto"
                  width={32}
                  height={32}
                  className="hidden xsm:flex"
                />
                <span className="font-bold">
                  {windowWidth < 540 ? "Produto: " : ""}
                </span>
                {item.product}
              </h2>
              {/* <p className="text-xs md:text-center md:text-sm flex xsm:justify-self-center justify-self-start">
                <span className="font-bold">
                  {windowWidth < 540 ? "ID: " : ""}
                </span>
                {item.id}
              </p> */}
              <p className="text-xs xsm:text-center md:text-sm flex-col flex-wrap  xsm:justify-self-center items-start">
                <span className="font-bold">
                  {windowWidth < 540 ? "Preço: " : ""}
                </span>
                R$ {item.price}
              </p>
              <p className="text-xs text-center md:text-sm flex-wrap flex xsm:justify-self-center justify-self-start">
                <span className="font-bold">
                  {windowWidth < 540 ? "Categoria: " : ""}
                </span>
                {item.category}
              </p>
              <p className="text-xs text-center md:text-sm flex flex-wrap xsm:justify-self-center justify-self-start">
                <span className="font-bold">
                  {windowWidth < 540 ? "Status: " : ""}
                </span>
                {item.status}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
