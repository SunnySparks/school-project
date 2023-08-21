import React from "react";
import { Link } from "gatsby";
import "./oferta.scss";
import "../../styles/global.scss";
import Fade from "react-reveal/Fade";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

const OfertaAcademica = () => {
  return (
    <div id="ofertaCont">
      <div id="ofertaTitle">
        <h2 className="webfont">Oferta Académica</h2>
        <h3 className="webfont">
          🎓 ¡Explora horizontes sin límites en Sunshine University! 🌟
        </h3>
        <h4 className="webfont2">
          Embárcate en un viaje académico transformador en Sunshine University,
          donde las posibilidades son ilimitadas y el conocimiento no tiene
          límites. Como un faro de excelencia en la educación, estamos
          encantados de extender una invitación exclusiva para ti.
        </h4>
        <h4 className="webfont2">
          🌐 Profesorado incomparable: Sumérgete en un mundo de proezas
          intelectuales, guiado por un distinguido profesorado compuesto por
          expertos líderes y pioneros del pensamiento en sus campos.
        </h4>
        <h4 className="webfont2">
          📚 Programas de vanguardia: Elige entre una amplia gama de programas
          innovadores y meticulosamente elaborados, diseñados para equiparte con
          las habilidades y conocimientos necesarios para prosperar en los
          dinámicos paisajes de hoy y mañana.
        </h4>
        <h4 className="webfont2">
          🌍 Perspectivas globales: Sumérgete en una comunidad culturalmente
          diversa e inclusiva, fomentando un rico tapiz de perspectivas que
          ampliarán tu comprensión del mundo y darán forma a tu mentalidad
          global.
        </h4>
        <h4 className="webfont2">
          🔬 Instalaciones de vanguardia: Libera tu potencial dentro de nuestro
          campus moderno y tecnológicamente avanzado, que cuenta con
          laboratorios de clase mundial, bibliotecas y espacios de colaboración
          para mejorar tu experiencia de aprendizaje.
        </h4>
        <h4 className="webfont2">
          🌱 Crecimiento personalizado: Nuestro compromiso con tu éxito se
          extiende más allá del aula, con tutorías personalizadas y apoyo para
          nutrir tu crecimiento académico y personal.
        </h4>
        <h4 className="webfont2">
          🎉 Vibrante vida en el campus: Sumérgete en un vibrante tapiz de
          actividades extracurriculares, clubes y eventos que prometen
          enriquecer tu experiencia universitaria y crear recuerdos para toda la
          vida.
        </h4>
      </div>
      <div id="ofertaContent">
        <div className="webfont2 textCont">
          <div className="buttonDrowpdown">
            <div className="buttonInner"></div>
          </div>
        </div>
        <div className="home-buttons webfont">
          <Link href="/Actriz/SaberMas">Saber Más</Link>
        </div>
        <FontAwesomeIcon icon="check-square" />
        Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      </div>
    </div>
  );
};

export default OfertaAcademica;
