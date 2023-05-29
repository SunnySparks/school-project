import React from 'react'
import './SobreMi.scss'
import '../../styles/global.scss';
import Fade from 'react-reveal/Fade';

const SobreMi = () => {
  return (
    <div>
      <Fade left duration={2800}>
        <div id="sobreMiCont">
            <div id="title">
                <h2 className='webfont'>Sobre Ella</h2>
            </div>
            <div id="content">
                <p  className='webfont4'>Laura Vetchínova es una artista interdisciplinaria que emplea las artes escénicas y plásticas como medio de resignificación de valores personales, cuestionando el concepto de arte, para así lograr el acceso a productos culturales y al desarrollo integral de la persona.
 Estudia Arte Teatral en Rusia (Academia Estatal  de Arte Teatral de San Petersburgo 2009-2014) y tiene una Maestría en Artes Escénicas y Teatro (UNIR 2020-2021)
 Ha sido finalista en Muestras Estatales de Teatro (Veracruz y Oaxaca). Acreedora de premios estatales (Oaxaca) y nacionales (EFITEATRO 2019, Circuito Nacional de Artes Escénicas Chapultepec: Títeres y Objeto y ENARTES 2022).
 Ha impartido clases de teatro en la Preparatoria y Universidad La Salle Oaxaca, en La Mesoamericana y en NECIA.
 En 2022 hizo una gira desde la Costa de Oaxaca, trabajando con comunidades acercando la profesionalización teatral. Continuó por Xalapa, Guadalajara y Monterrey, impartiendo el taller: “Desmitificando a Stanislavski. La verdad es la base de todo”.
 Actualmente le interesa la investigación, la docencia y la creación escénica. Ha dirigido circo contemporáneo, escrito adaptaciones de obras de teatro y es Directora Creativa del Festival Internacional Tierra de lo Muertos.</p>
            </div>
        </div>
      </Fade>
    </div>
  )
}

export default SobreMi