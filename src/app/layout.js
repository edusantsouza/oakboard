import "./globals.css";
import Header from "@/components/Header/index.js";
import Menu from "@/components/Menu/index.js";
import { MenuProvider } from "@/context/MenuContext";
import { ScreenWidthProvider } from "@/context/ScreenWidthContext";

export const metadata = {
  title: "Oakboard - Cadastre seus produtos",
  description: "Dashboard para cadastro de produtos de e-commerce.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <ScreenWidthProvider>
        <body>
          <MenuProvider>
            <Header className="max-w-[1440px]" />
            <main className="grid grid-cols-[200px_1fr_1fr] md:grid-cols-[280px_1fr_1fr] px-4 md:px-8 gap-4">
              <Menu className="col-span-1" />
              <div className="page_view col-span-3 md:col-span-2 w-full h-full p-2 md:p-8 mt-8 bg-[var(--green-500)] rounded-md md:rounded-2xl flex justify-center items-center ">
                {children}
              </div>
            </main>
          </MenuProvider>
        </body>
      </ScreenWidthProvider>
    </html>
  );
}
