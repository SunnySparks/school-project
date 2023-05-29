import React from 'react';
import './asesora.scss';
import img from '../../images/portada5.webp';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

const AsesoraCreativa = () => {
  return (
    <Fade left duration={2800}>
    <div id="asesoraCont">
      <h2 className="webfont">Asesora Creativa y Docente</h2>
      <div className="wrapper">
        <div id="imagery">
          <div id="imgCont">
            <img src={img} alt="Enfermedades Espirituales" />
          </div>
        </div>
          <div id="aContent">
          <div id="textCont">
            <p>Desde el 2012 Laura comparte sus conocimientos y experiencias tanto en idiomas como en el arte y lo creativo. Para Laura el arte es una plataforma de reconocimiento humano y transformación. La docencia del arte aporta al desarrollo integral del ser, es por ello que ella ha logrado crear metodologías de enseñanza que permiten al practicante encontrar nuevos mecanismos de diálogo consigo mismo. 
            La artista Laura Vetchínova a su vez ha asesorado y curado proyectos artísticos desde Festivales independientes e internacionales, procesos de titulación, puestas en escenas y proyectos multidisciplinares en diversas escuelas y fuera de las Instituciones. 
            </p>
          </div>
          <div className="home-buttons webfont">
          <Link href="./Asesora/SaberMas">Saber Más</Link>
          </div>
        </div>
        </div>
    </div>
    </Fade>
  )
}

export default AsesoraCreativa