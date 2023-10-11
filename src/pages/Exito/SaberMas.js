import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import "./style.scss";
import badge from "../../images/badge.png";

const SaberMas = () => {
  return (
    <>
      <Header />
      <div id="dividerCont"></div>
      <div className="subTitleCont" id="aboutBanner">
        <h2 className="subpageTitle">
          Exito y<br />
          Logros
        </h2>
        <img src={badge} id="titleLogo" />
      </div>
    </>
  );
};

export default SaberMas;
