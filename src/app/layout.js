import "./globals.css";
import Header from "@/components/Header/index.js";
import Menu from "@/components/Menu/index.js";
import FullScreenLoading from "@/components/Loading/FullScrrenLoading";
import ProductNotice from "@/components/Info/ProductNotice";
import RegisterProduct from "@/components/Forms/RegisterProduct";
import { MenuProvider } from "@/context/MenuContext";
import { ScreenWidthProvider } from "@/context/ScreenWidthContext";
import { ProductsContextProvider } from "@/context/ProductsContext";
import { RegisterControllerProvider } from "@/context/RegisterModalContext";

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
            <main className="grid grid-cols-[200px_1fr_1fr] px-4 gap-4 ]">
              <Menu className="col-span-1" />

              <RegisterControllerProvider>
                <ProductsContextProvider>
                  <FullScreenLoading />
                  <ProductNotice />
                  <RegisterProduct />
                  <div
                    className={`page_view  w-full col-span-3 min-h-[700px] ps:col-span-2  h-full p-2 md:p-6 rounded-lg flex justify-center items-center bg-[var(--glass-green)] backdrop-blur-md`}
                  >
                    {children}
                  </div>
                </ProductsContextProvider>
              </RegisterControllerProvider>
            </main>
          </MenuProvider>
        </body>
      </ScreenWidthProvider>
    </html>
  );
}
