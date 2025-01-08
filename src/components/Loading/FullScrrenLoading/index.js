"use client";

import React from "react";
import Image from "next/image";

export default function FullScreenLoading({ message = "Carregando..." }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,44,22,0.8)] text-white backdrop-blur-md">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto mb-8"></div>
          <Image
            className="animate-fade"
            src="oaklogo.svg"
            alt="Oakboard Logo"
            width={120}
            height={15}
          />
          <p className="mt-4 text-base font-semibold animate-fade">{message}</p>
        </div>
      </div>
    )
  );
}
