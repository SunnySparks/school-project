import React from "react";
import Layout from "../Components/Layout";
import "../styles/videobg.scss";
import "../styles/global.scss";
import Hero from "../Components/Hero";
import OfertaAcademica from "../Components/OfertaAcademica";
import ExitoAcademico from "../Components/ExitoAcademico";
import About from "../Components/About";
import Footer from "../Components/Layout/Footer";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <OfertaAcademica />
      <ExitoAcademico />
      <Footer />
    </Layout>
  );
};

export default Index;
