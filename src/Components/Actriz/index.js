import React from 'react';
import { Link } from 'gatsby';
import './actriz.scss';
import '../../styles/global.scss'
import img from '../../images/actrizportada1.webp';
import img2 from '../../images/actrizportada2.webp';


const Actriz = () => {
  return (
    <div id="actrizCont">
      <h2 className="webfont">Actriz</h2>
      <div className="wrapper">
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
        <div id="textCont">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum pulvinar condimentum. Quisque id vulputate enim. Nam gravida non felis vitae pulvinar. Nunc eget tincidunt justo, et dictum mauris. Mauris mattis lacus efficitur sapien porta fringilla. Curabitur dictum mi maximus odio fringilla imperdiet. Aenean euismod metus nulla, volutpat vestibulum lacus dapibus a. Quisque lacus urna, dapibus at lorem ut, malesuada ultricies nunc. Aliquam vestibulum luctus mauris, vitae tincidunt ligula blandit quis. Suspendisse tincidunt magna mi, non faucibus lectus mattis a. Vestibulum egestas mi venenatis dapibus semper.</p>
        </div>
      </div>
      <div className="home-buttons webfont">
        <Link href="./Actriz/SaberMas">Saber Más</Link>
      </div>
    </div>
  )
}

export default Actriz