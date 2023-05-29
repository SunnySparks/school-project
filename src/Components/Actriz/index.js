import React from 'react';
import { Link } from 'gatsby';
import './actriz.scss';
import '../../styles/global.scss'
import img from '../../images/actrizportada1.webp';
import img2 from '../../images/actrizportada2.webp';
import Fade from 'react-reveal/Fade';

const Actriz = () => {
  return (
    <Fade right duration={2800}>
    <div id="actrizCont">
      <div id="actrizTitle"><h2 className="webfont">Actriz</h2></div>
      <div className="wrapper">
        <div id="actrizImagery">
          <div id="imgMobileCont">
            <img src={img} alt="Actriz" id="portada1"/>
            <img src={img2} alt="Actriz" id="portada2"/>
          </div>
          <div id="imgCont">
            <div className="item" id="item1">
              <h2 className="webfont2">Actriz de cine y teatro</h2>
            </div>
            <div className="item" id="item2">
              <h2 className="webfont2">Laura Vetchínova<br></br>1.73 cm<br></br>Idiomas: Español, ruso e inglés</h2>
            </div>
            <div className="item" id="item3">
              <h2 className="webfont2">"Metro"<br></br>Dirección:  Simion Spivak<br></br>Rusia 2014</h2>
            </div>
            <div className="item" id="item4">
              <h2 className="webfont2">“Estrellas enterradas”<br></br>De: Antonio Zúñiga<br></br>Oaxaca 2016</h2>
            </div>
            <div className="item" id="item5">
              <h2 className="webfont2">“Ítaca, bitácora de viaje”<br></br>De: Saúl Enríquez<br></br>Veracruz 2019</h2>
            </div>
            <div className="item" id="item6">
              <h2 className="webfont2">“Mujeres en el encierro”<br></br>De: María Morett<br></br>Oaxaca 2017</h2>
            </div>
          </div>
        </div>
        <div id="actrizContent">
          <div id="textCont">
            <p>Estudió profesionalmente en la Academia de Arte Teatral de San Petersburgo, Rusia con especialidad en actuación dramática para teatro y cine. 
            (2009-2014)</p>
            <p>Confía en la verdad como la base de todo, sin importar el género o estilo de la pieza. La escuela del realismo ruso le ha brindado a Laura solidez y estructura en sus actuaciones y proyectos devinientes.  
            </p>
            <p>Laura fusiona la escuela actoral clásica rusa con la contemporánea mexicana, ofreciendo así: un estilo realista que permite la identificación con los personajes, y a su vez matices extravagantes de la escena contemporánea. 
            </p>
          </div>
          <div id="videoCont">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WXiDT-7Hmmc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="home-buttons webfont">
            <Link href="./Actriz/SaberMas">Saber Más</Link>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  )
}

export default Actriz