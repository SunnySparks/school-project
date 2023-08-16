import React from 'react'
import './SobreMi.scss'
import '../../styles/global.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import about from '../../images/about.png'
import mision from '../../images/mision.png'
import prof from '../../images/professor.png'
import inv from '../../images/research.png'

const SobreMi = () => {
  return (
    <div>
      <div id="sobreMiCont">
        <div id="valorescont">
          <div class="valinner" id="about">
            <div className="title">
            <img src={about} />
                <h2 className='webfont'>Acerca de nosotros<br></br>Sunshine University</h2>
            </div>
            <div className="content">
                <p  className='webfont2'>
                Bienvenido a Sunshine University, donde el conocimiento se une a la innovación y los sueños se
                transforman en realidad. Fundada en el espíritu de la exploración intelectual y la excelencia
                académica, Sunshine University es un faro de la educación superior que tiene como objetivo
                capacitar a la próxima generación de líderes globales, pensadores y creadores.
                </p>
            </div>
          </div>
          <div class="valinner" id="mision">
            <div className="title">
              <img src={mision} />
                <h2 className='webfont'>Nuestra misión</h2>
            </div>
            <div className="content">
                <p  className='webfont2'>
                En Sunshine University, nuestra misión es cultivar un entorno de aprendizaje dinámico e inclusivo
                que fomente el pensamiento crítico, la creatividad y el liderazgo ético. Estamos comprometidos a
                proporcionar experiencias educativas transformadoras que capaciten a los estudiantes para afrontar
                retos complejos y contribuir de manera significativa a la sociedad.
                </p>
            </div>
          </div>
          <div class="valinner" id="prof">
            <div className="title">
                <img src={prof} />
                <h2 className='webfont'>Profesorado excepcional</h2>
            </div>
            <div className="content">
                <p  className='webfont2'>
                Nuestros distinguidos profesores están en la vanguardia de sus respectivos campos, aportando su
                experiencia y pasión al aula. Inspiran, guían y orientan a los estudiantes para que amplíen los
                límites del conocimiento, animándoles a cuestionar, explorar e innovar.
                </p>
            </div>
          </div>
          <div class="valinner" id="inv">
            <div className="title">
                <img src={inv} />
                <h2 className='webfont'>Investigación de vanguardia</h2>
            </div>
            <div className="content">
                <p  className='webfont2'>
                Sunshine University se dedica a ampliar los límites del conocimiento a través de una investigación
                pionera. Nuestros centros e institutos de investigación colaboran entre disciplinas para abordar
                algunos de los problemas más acuciantes del mundo, desde la sostenibilidad hasta los avances en la
                atención sanitaria. Los estudiantes tienen la oportunidad de participar en proyectos de investigación
                prácticos que contribuyen a mejorar la sociedad.
                </p>
            </div>
          </div>
        </div>
        <div id="btn">
          <div className="home-buttons webfont">
            <Link href="#">Saber más</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreMi