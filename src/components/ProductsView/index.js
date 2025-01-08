"use client";

import Image from "next/image";
import ProductNotFound from "@/components/Info/ProductNotFound";
import SearchNotFound from "@/components/Info/SearchNotFound";
import UpdateProductBtn from "@/components/Buttons/UpdateProduct";
import DeleteProductBtn from "@/components/Buttons/DeleteProduct";
import { useProductController } from "@/context/ProductContext";
import { useScreenWidth } from "@/context/ScreenWidthContext";

const ProductInfo = ({ label, value, isMobile }) => (
  <p className="text-xs text-center md:text-sm gap-1 flex flex-col xsm:flex-row xsm:justify-center justify-start items-start">
    <span className="font-bold text-[var(--green-100)]">
      {isMobile && `${label}: `}
    </span>
    <span
      className={`font-semibold ${
        label === "Status"
          ? value.toLowerCase() === "em estoque"
            ? "text-green-400"
            : " text-red-700"
          : ""
      }`}
    >
      {value}
    </span>
  </p>
);

const ProductItem = ({ item, windowWidth }) => (
  <div
    key={item.id}
    className={`p-4 gap-x-11 ${
      item.position % 2 !== 0 ? "bg-[var(--green-600)]" : ""
    } rounded grid grid-cols-2 gap-4 items-center xsm:grid-cols-5 grid-rows-2 xsm:grid-rows-1`}
  >
    <h2 className="text-xs md:text-sm flex flex-col xsm:flex-row items-start xsm:items-center gap-1">
      <Image
        src={item.image}
        alt="Imagem do produto"
        width={32}
        height={32}
        className="hidden xsm:flex"
      />
      <span className="font-bold text-[var(--green-100)]">
        {windowWidth < 540 ? "Produto: " : ""}
      </span>
      {item.product}
    </h2>

    <ProductInfo
      label="Preço"
      value={`R$ ${item.price}`}
      isMobile={windowWidth < 540}
    />
    <ProductInfo
      label="Categoria"
      value={item.category}
      isMobile={windowWidth < 540}
    />
    <ProductInfo
      label="Status"
      value={item.status}
      isMobile={windowWidth < 540}
    />

    <div className="flex gap-3 xsm:justify-center items-center">
      <UpdateProductBtn id={item.id} />
      <DeleteProductBtn id={item.id} />
    </div>
  </div>
);

export default function ProductsView() {
  const windowWidth = useScreenWidth();
  const { searchValue, products, filteredProducts } = useProductController();

  const renderProducts = () => {
    if (searchValue && filteredProducts.length === 0) {
      return <SearchNotFound />;
    }

    if (products.length === 0) {
      return <ProductNotFound />;
    }

    return filteredProducts.map((item) => (
      <ProductItem key={item.id} item={item} windowWidth={windowWidth} />
    ));
  };

  return <div className="flex flex-col gap-2">{renderProducts()}</div>;
}