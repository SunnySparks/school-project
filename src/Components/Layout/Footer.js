import React from 'react';
import img from '../../images/footerlogo.png';
import './footer.scss';
import '../../styles/global.scss'

const Footer = () => {
  return (
    <>
    <div id="footerCont">
        <div id="footerInner">
            <div id="footerTxt">
                <p class="webfont2">Esta página web es apoyado por el Sistema
                    de Apoyos a la Creación y Proyectos Culturales (SACPC)
                </p>
            </div>
            <div id="footerImg">
                <img src={img}></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer