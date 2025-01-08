"use client";

import React from "react";
import Image from "next/image";

const RegisterSucess = ({ message }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,44,22,0.8)] text-white backdrop-blur-md">
      <div className="text-center flex flex-col items-center justify-center gap-4 ">
        <p className="mt-4 text-base text-center font-semibold max-w-[160px]">
          {message}
        </p>
        <Image
          className=""
          src="sucess.svg"
          alt="Ícone de sucesso"
          width={60}
          height={60}
        />

        <Image
          className=""
          src="oaklogo.svg"
          alt="Oakboard Logo"
          width={120}
          height={15}
        />
      </div>
    </div>
  );
};

const DeleteSucess = ({ message }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,44,22,0.8)] text-white backdrop-blur-md">
      <div className="text-center flex flex-col items-center justify-center gap-4 ">
        <p className="mt-4 text-base text-center font-semibold max-w-[160px]">
          {message}
        </p>
        <Image
          className=""
          src="trash.svg"
          alt="Ícone de lixeira"
          width={60}
          height={60}
        />

        <Image
          className=""
          src="oaklogo.svg"
          alt="Oakboard Logo"
          width={120}
          height={15}
        />
      </div>
    </div>
  );
};

export default function ProductNotice() {
  //Receberá informações do contexto dos produtos para
  // notificar o cadastro, a alteração ou a exclusão de qualquer produto.

  const [isLoading, setIsLoading] = React.useState(false);
  //A mensagem será controlada pelo contexto de acordo com a ação executada (create, delete, update)
  const [message, setMessage] = React.useState(
    "Produto cadastrado com sucesso!",
  );

  const handleNotice = () => {
    if (false) {
      return <RegisterSucess message={message} />;
    }

    if (true) {
      return <DeleteSucess message={message} />;
    }
  };

  //

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading && handleNotice();
}
