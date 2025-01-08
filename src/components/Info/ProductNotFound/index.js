import AddProductBtn from "@/components/Buttons/AddProduct";

export default function ProductNotFound() {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-8 font-medium text-[var(--white-100)] text-sm xsm:text-base mt-6">
      Nenhum produto cadastrado.
      <AddProductBtn isResponsible={false} />
    </div>
  );
}
