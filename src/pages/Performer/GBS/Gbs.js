import React from 'react';
import '../../../styles/global.scss';
import '../style.scss';
import { Link } from 'gatsby';
import Header from '../../../Components/Layout/Header';
import a1 from '../../../images/perfsm/gbs/p1.webp';
import a2 from '../../../images/perfsm/gbs/p2.webp';
import a3 from '../../../images/perfsm/gbs/p3.webp';
import a4 from '../../../images/perfsm/gbs/p4.webp';
import a5 from '../../../images/perfsm/gbs/p5.webp';
import a6 from '../../../images/actrizsm/6_f.webp';
import a7 from '../../../images/actrizsm/7.webp';
import a8 from '../../../images/actrizsm/8.webp';
import a9 from '../../../images/actrizsm/9.webp';
import a10 from '../../../images/actrizsm/10.webp';
import a11 from '../../../images/actrizsm/11.webp';
import a12 from '../../../images/actrizsm/12.webp';

const Gbs = () => {
  return (
    <>
    <Header />
    <div id="genteBS">
      <div className='subTitleCont'>
        <h2 className="subpageTitle">Gente Bañándose Sola</h2>
        <p className='subpageSubT'>Parte de la construcción de fenómenos en torno al actor de bañarse: lo que implica físicamente y la soledad como condición humana. 
          Se trabaja con cada presentación la intervención al espacio a través de la memoria y de diversas prácticas escénicas.
        </p>
      </div>
      <div id="gbsGrid">
        <div id="grid1">
          <Link className='inner' href="../1/Laboratorio">
            <div class="innertitle">
              <h3>Laboratorio de intervención al espacio privado</h3>
              <h2>Muestra"Jabón" Xoxocotlán, Oaxaca 2017</h2>
            </div>
            <div class="innerimage">
              <img src={a1} />
            </div>
          </Link>
          <Link className='inner' href="../2/Practicas">
            <div class="innertitle">
              <h3>Prácticas a la vía pública e intervenciones a espacios privados</h3>
              <h2>Oaxaca 2017</h2>
            </div>
            <div class="innerimage">
              <img src={a2} />
            </div>
          </Link>
          <Link className='inner' href="../3/Festival">
            <div class="innertitle">
              <h3>Festival "Teatro para el fin del mundo"</h3>
              <h2>Tampico, Tamaulipas 2017</h2>
            </div>
            <div class="innerimage">
              <img src={a3} />
            </div>
          </Link>
          <Link className='inner' href="../4/TFM">
            <div class="innertitle">
              <h3>Festival "Teatro para el fin del mundo"</h3>
              <h2>Córdoba, Argentina</h2>
            </div>
            <div class="innerimage">
              <img src={a4} />
            </div>
          </Link>
        </div>
        <div id="grid2">
          <Link className='inner' href="../5/BSAR">
            <div class="innertitle">
              <h3></h3>
              <h2>Buenos Aires, Argentina</h2>
            </div>
            <div class="innerimage">
              <img src={a5} />
            </div>
          </Link>
          <div className='inner'>
          <div class="innertitle">
              <h2>Proyecto 6</h2>
            </div>
            <img src={a6} />
          </div>
          <div className='inner'>
          <div class="innertitle">
              <h2>Proyecto 7</h2>
            </div>
            <img src={a7} />
          </div>
          <div className='inner'>
          <div class="innertitle">
              <h2>Proyecto 8</h2>
            </div>
            <img src={a8} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Gbs