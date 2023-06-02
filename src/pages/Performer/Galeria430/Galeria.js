import React from 'react'
import '../../../styles/global.scss';
import '../style.scss';
import { Link } from 'gatsby';
import Header from '../../../Components/Layout/Header';
import Footer from '../../../Components/Layout/Footer';
import a1 from '../../../images/perfsm/g430/1.webp';
import a2 from '../../../images/perfsm/g430/2.webp';
import a3 from '../../../images/perfsm/g430/3.webp';
import a4 from '../../../images/perfsm/g430/4.webp';
import a5 from '../../../images/perfsm/g430/5.webp';

const Galeria = () => {
  return (
    <>
    <Header />
    <div className='gridCont'>
        <div className='subTitleCont'>
            <h2 className="subpageTitle">Galería 4:30</h2>
            <p id="galeriasubtitle">Parte de la construcción de fenómenos en torno al actor de bañarse: lo que implica físicamente y la soledad como condición humana. 
              Se trabaja con cada presentación la intervención al espacio a través de la memoria y de diversas prácticas escénicas.
            </p>
            <p id="galeriasubtitle">Año: 2017</p>
        </div>
        <div className='gridOuter'>
            <div className='grid1'>
                <div className='gridInner'>
                    <div className='innerimage'>
                        <img src={a1}/>
                    </div>
                </div>
                <div className='gridInner'>
                    <div className='innerimage'>
                        <img src={a2}/>
                    </div>
                </div>
                <div className='gridInner'>
                    <div className='innerimage'>
                        <img src={a3}/>
                    </div>
                </div>
                <div className='gridInner'>
                    <div className='innerimage'>
                        <img src={a4}/>
                    </div>
                </div>
                <div className='gridInner'>
                    <div className='innerimage'>
                        <img src={a5}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Galeria