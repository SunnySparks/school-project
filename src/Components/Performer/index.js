import React from 'react';
import { Link } from 'gatsby';
import performer from '../../images/performer.webp';
import './performer.scss';
import '../../styles/global.scss';

const Performer = () => {
  return (
    <div id='performerCont'>
      <h2 className='webfont'>Performer</h2>
      <div className='wrapper'>
        <div id="imagery">
          <div id='imgCont'>
            <img src={performer} alt='Enfermedades Espirituales' />
          </div>
        </div>
        <div id="perfContent">
        <div id='textCont'>
          <p>
          En México Laura halla nuevos lenguajes artísticos, los cuáles los agrupa a su actuación y quehacer creativo. Es así como surge la performance en su práctica. 
          Ha tomado talleres de teatro contemporáneo, escena expandida, intervención a espacios abandonados, así como de escritura aristotélica y performativa. Ha participado en seminarios de performance y colaborado con diversos artistas a lo largo y ancho de México. Se ha formando en danza butoh con Yumiko Yoshioka y Tadashi Endo. 
          Actualmente le interesa la investigación transdiciplinar y asiste al Taller Rufino Tamayo (Oaxaca) a clases de pintura.
          </p>
        </div>
        <div className="home-buttons webfont">
            <Link href="./Performer/SaberMas">Saber Más</Link>
          </div>
      </div>
        </div>
    </div>
  );
};

export default Performer;
