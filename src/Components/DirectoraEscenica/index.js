import React from 'react';
import { Link } from 'gatsby';
import './directora.scss';
import img from '../../images/direcportada.webp'
const DirectoraEscenica = () => {
  return (
    <div id='directoraCont'>
      <h2 className='webfont'>Directora Escénica</h2>
      <div className='wrapper'>
        <div id="imagery">
          <div id='imgCont'>
            <img src={img} />
          </div>
        </div>
        <div id="dirContent">
          <div id='textCont'>
            <p>
            Sus inicios como directora escénica surgen en el 2017 en la Universidad La Salle, Oaxaca al ser la responsable del Grupo Representativo de Teatro. Con la finalidad de aprehender conceptos teóricos, Laura realizaba ejercicios prácticos con sus estudiantes que la llevaron a montar escenas y diseñar nuevas espacialidades.
            </p>
            <p>Es así como surgen nuevas metodologías de enseñanza en sus prácticas; agrupando el entrenamiento actoral, búsquedas personales y estética de la escena.</p>
            <p>Ha coordinado, escrito y dirigido proyectos para escuelas, eventos internacionales y para compañías independientes de artes escénicas. Adapta textos y escribe obras originales a partir de temas en cuestión.</p>
          </div>
          <div className='home-buttons webfont'>
            <Link href="./Directora/SaberMas">Saber Más</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoraEscenica;
