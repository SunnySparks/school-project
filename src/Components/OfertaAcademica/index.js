import React from "react";
import { Link } from "gatsby";
import "./oferta.scss";
import "../../styles/global.scss";
import Fade from "react-reveal/Fade";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faLanguages,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

library.add(fab, faCheckSquare, faCoffee);

const OfertaAcademica = () => {
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);
  const [isClassAdded3, setIsClassAdded3] = useState(false);
  const [isClassAdded4, setIsClassAdded4] = useState(false);
  const [isClassAdded5, setIsClassAdded5] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  //const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsOpen1(!isOpen1);
  };
  /*const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleClick = () => {
    const element = document.getElementById("list2");
    element.classList.add("dropdownList");
  }; */

  const handleClick = () => {
    setIsClassAdded(!isClassAdded);
  };
  const handleClick2 = () => {
    setIsClassAdded2(!isClassAdded2);
  };
  const handleClick3 = () => {
    setIsClassAdded3(!isClassAdded3);
  };
  const handleClick4 = () => {
    setIsClassAdded4(!isClassAdded4);
  };
  const handleClick5 = () => {
    setIsClassAdded5(!isClassAdded5);
  };
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
            <div className="buttonInner">
              <button onClick={handleClick}>
                <FontAwesomeIcon icon={"language"} />
                <FontAwesomeIcon icon={"fa-language"} />
                <h4>🈵🆎Licenciatura en Idiomas</h4>
              </button>
              <ul className={`dropdown-list ${isClassAdded ? "open" : ""}`}>
                <li>
                  <h2>elemento1</h2>
                </li>
                <li>
                  <h2>elemento2</h2>
                </li>
                <li>
                  <h2>elemento3</h2>
                </li>
                <li>
                  <h2>elemento4</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonDrowpdown">
            <div className="buttonInner">
              <button onClick={handleClick2}>
                <h4>🚑🏥Licenciatura en Enfermería</h4>
              </button>
              <ul className={`dropdown-list ${isClassAdded2 ? "open" : ""}`}>
                <li>
                  <h2>elemento1</h2>
                </li>
                <li>
                  <h2>elemento2</h2>
                </li>
                <li>
                  <h2>elemento3</h2>
                </li>
                <li>
                  <h2>elemento4</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonDrowpdown">
            <div className="buttonInner">
              <button onClick={handleClick3}>
                <h4>🧑‍🍳🍱Licenciatura en Gastronomía</h4>
              </button>
              <ul className={`dropdown-list ${isClassAdded3 ? "open" : ""}`}>
                <li>
                  <h2>elemento1</h2>
                </li>
                <li>
                  <h2>elemento2</h2>
                </li>
                <li>
                  <h2>elemento3</h2>
                </li>
                <li>
                  <h2>elemento4</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonDrowpdown">
            <div className="buttonInner">
              <button onClick={handleClick4}>
                <h4>📐🏗️Licenciatura en Arquitectura</h4>
              </button>
              <ul className={`dropdown-list ${isClassAdded4 ? "open" : ""}`}>
                <li>
                  <h2>elemento1</h2>
                </li>
                <li>
                  <h2>elemento2</h2>
                </li>
                <li>
                  <h2>elemento3</h2>
                </li>
                <li>
                  <h2>elemento4</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="buttonDrowpdown">
            <div className="buttonInner">
              <button onClick={handleClick5}>
                <h4>🧑‍💻⚛️Ingeniería en Software</h4>
              </button>
              <ul className={`dropdown-list ${isClassAdded5 ? "open" : ""}`}>
                <li>
                  <h2>elemento1</h2>
                </li>
                <li>
                  <h2>elemento2</h2>
                </li>
                <li>
                  <h2>elemento3</h2>
                </li>
                <li>
                  <h2>elemento4</h2>
                </li>
              </ul>
            </div>
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
