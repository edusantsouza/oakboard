import React from "react";
import { useProductsController } from "@/context/ProductsContext";

export default function SearchNotFound() {
  const { searchValue } = useProductsController();

  return (
    <p className="text-center font-medium text-[var(--white-100)] text-sm xsm:text-base mt-6">
      Sem resultados para
      <br />
      <span className="text-[var(--green-100)] font-semibold text-sm xsm:text-base">
        {'"' + searchValue + '"'}
      </span>
    </p>
  );
}
