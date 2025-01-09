export default function RegisterActions({ cancelRegister, clearImage }) {
  return (
    <div className="buttons w-full flex gap-4 justify-end items-center mt-4 md:mt-0 p-3">
      <button
        className="border border-[var(--grey-50)] md:py-3 py-2 md:px-6 px-5 rounded-sm font-semibold text-[var(--grey-50)] text-sm"
        type="submit"
        onClick={() => {
          cancelRegister();
          clearImage();
        }}
      >
        Cancelar
      </button>
      <button
        className="border border-[var(--green-200)] bg-[var(--green-200)] md:py-3 py-2 md:px-7 px-5 rounded-sm text-sm font-semibold"
        type="submit"
      >
        {true ? "Cadastrar" : "Atualizar"}
      </button>
    </div>
  );
}
