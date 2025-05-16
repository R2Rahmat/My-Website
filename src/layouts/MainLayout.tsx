
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-portfolio-dark">
      <HelmetProvider>
        <Header />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
};

export default MainLayout;
