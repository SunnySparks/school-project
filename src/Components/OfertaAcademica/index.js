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
        <FontAwesomeIcon icon="check-square" />
        Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      </div>
      <div id="ofertaContent">
        <div id="textCont" className="webfont2">
          <p>
            Estudió profesionalmente en la Academia de Arte Teatral de San
            Petersburgo, Rusia con especialidad en actuación dramática para
            teatro y cine. (2009-2014)
          </p>
          <p>
            Confía en la verdad como la base de todo, sin importar el género o
            estilo de la pieza. La escuela del realismo ruso le ha brindado a
            Laura solidez y estructura en sus actuaciones y proyectos
            devinientes.
          </p>
          <p>
            Laura fusiona la escuela actoral clásica rusa con la contemporánea
            mexicana, ofreciendo así: un estilo realista que permite la
            identificación con los personajes, y a su vez matices extravagantes
            de la escena contemporánea.
          </p>
        </div>
        <div className="home-buttons webfont">
          <Link href="/Actriz/SaberMas">Saber Más</Link>
        </div>
      </div>
    </div>
  );
};

export default OfertaAcademica;
