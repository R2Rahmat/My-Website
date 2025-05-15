
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <HelmetProvider>
        <Helmet>
          <title>MD RAHMAT - Full Stack Developer</title>
          <meta name="description" content="Portfolio website of MD RAHMAT, a Full Stack Developer specializing in MERN stack development based in Greater Noida, India" />
          <meta name="keywords" content="web developer, full stack developer, MERN stack, React, Node.js, MongoDB, Express, Greater Noida" />
          <meta name="author" content="MD RAHMAT" />
          <meta property="og:title" content="MD RAHMAT - Full Stack Developer" />
          <meta property="og:description" content="Full Stack Developer specializing in MERN stack development" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mdrahmat.dev" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@rahmatdev5" />
          <meta name="twitter:title" content="MD RAHMAT - Full Stack Developer" />
          <meta name="twitter:description" content="Full Stack Developer specializing in MERN stack development" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
