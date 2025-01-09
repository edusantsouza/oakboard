"use client";

import React from "react";
import AddProductBtn from "@/components/Buttons/AddProduct";
import ProductsView from "@/components/ProductsView";

import SearchProduct from "@/components/Forms/SearchProduct";
import ClearProductsList from "@/components/Buttons/clearProducts";

export default function Produtos() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="header_produtos flex w-full justify-between">
        <SearchProduct />
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <ClearProductsList isResponsible={true} />
          <AddProductBtn isResponsible={true} />
        </div>
      </div>

      <div className="flex flex-col w-full gap-2  mt-4 ">
        <div className="hidden xsm:grid table_head grid-cols-5 items-center bg-[var(--green-600)] px-2 py-3 mb-4 ">
          <span className="text-sm font-semibold justify-self-center">
            Produto
          </span>
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
        <ProductsView />
      </div>
    </div>
  );
}
