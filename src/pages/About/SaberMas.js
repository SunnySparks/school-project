import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import "./style.scss";

const SaberMas = () => {
  return (
    <>
      <Header />
      <div className="subTitleCont" id="aboutBanner">
        <h2 className="subpageTitle">Sobre Nosotros</h2>
      </div>
      <div id="AbtCont">SaberMas</div>
      <Footer />
    </>
  );
};

export default SaberMas;
