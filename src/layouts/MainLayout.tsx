
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MD RAHMAT - Full Stack Developer</title>
        <meta name="description" content="Portfolio website of MD RAHMAT, a Full Stack Developer specializing in MERN stack development" />
        <meta name="keywords" content="web developer, full stack developer, MERN stack, React, Node.js, MongoDB, Express" />
      </Helmet>
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
