import React from "react";
import Image from "next/image";
import { useScreenWidth } from "@/context/ScreenWidthContext";
import { useProductController } from "@/context/ProductContext";

export default function SearchProduct() {
  const { clearSearch, handleSearch, searchValue } = useProductController();
  const windowWidth = useScreenWidth();

  return (
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
        <button className="col-start-1 col-end-1 row-start-1 row-end-1 self-center justify-self-end p-3 hover:opacity-90">
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
  );
}
