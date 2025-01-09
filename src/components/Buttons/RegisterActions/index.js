export default function RegisterActions({ cancelRegister, clearImage }) {
  return (
    <div className="buttons w-full flex gap-4 justify-end items-center p-3">
      <button
        className="border border-[var(--grey-50)] py-3 px-6 rounded-sm font-semibold text-[var(--grey-50)] text-sm"
        type="submit"
        onClick={() => {
          cancelRegister();
          clearImage();
        }}
      >
        Cancelar
      </button>
      <button
        className="border border-[var(--green-400)] bg-[var(--green-400)] py-3 px-7 rounded-sm text-sm font-semibold"
        type="submit"
      >
        {true ? "Cadastrar" : "Atualizar"}
      </button>
    </div>
  );
}
