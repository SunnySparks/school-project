import React, {useState} from 'react'
import './style.scss';
import a1 from '../../images/actrizsm/1.webp';
import a2 from '../../images/actrizsm/2.webp';
import a3 from '../../images/actrizsm/3.webp';
import a4 from '../../images/actrizsm/4-1.webp';
import a5 from '../../images/actrizsm/5_f.webp';
import a6 from '../../images/actrizsm/6_f.webp';
import a7 from '../../images/actrizsm/7.webp';
import a8 from '../../images/actrizsm/8.webp';
import a9 from '../../images/actrizsm/9.webp';
import a10 from '../../images/actrizsm/10.webp';
import a11 from '../../images/actrizsm/11.webp';
import a12 from '../../images/actrizsm/12.webp';
import a13 from '../../images/actrizsm/13.webp';
import a14 from '../../images/actrizsm/14.webp';
import a15 from '../../images/actrizsm/15.webp';
import a16 from '../../images/actrizsm/16.webp';
import a17 from '../../images/actrizsm/17.webp';
import a18 from '../../images/actrizsm/18.webp';
import a19 from '../../images/actrizsm/19.webp';
import a20 from '../../images/actrizsm/20.webp';
import a21 from '../../images/actrizsm/21.webp';
import a22 from '../../images/actrizsm/22.webp';
import Header from '../../Components/Layout/Header';

const SaberMas = () => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const toggle1 = () => {
        setIsActive1(current => !current);
    };
    const toggle2 = () => {
        setIsActive2(current => !current);
    };
    const toggle3 = () => {
        setIsActive3(current => !current);
    };
    const toggle4 = () => {
        setIsActive4(current => !current);
    };
  return (
    <>
    <Header />
    <div id="title">
        <h2>Actriz</h2>
    </div>
    <div id="sliderCont">
        <div className="slider">
        <div className="slideTrack">
            <div className="slide">
                <img src={a1} />  
                <h4><strong>Metro</strong> San Petersburgo, Rusia 2014</h4> 
            </div>
            <div className="slide">
                <img src={a2} />
                <h4><strong>Metro</strong> Programa de mano. San Petersburgo, Rusia 2014</h4>
            </div>
            <div className="slide">
                <img src={a3} />
                <h4><strong>El Idiota.2012</strong> San Perterburgo, Rusia 2012</h4> 
            </div>
            <div className="slide">
                <img src={a4} />
                <h4><strong>Estrellas Enterradas</strong> Nota de prensa de obra. Oaxaca, México 2016</h4>
            </div>
            <div className="slide">
                <img src={a5} />
                <h4><strong>Estrellas Enterradas</strong> Oaxaca, México 2016</h4>
            </div>
            <div className="slide">
                <img src={a6} />
                <h4><strong>Estrellas Enterradas</strong> Oaxaca, México 2016</h4>
            </div>
            <div className="slide">
                <img src={a7} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Córdoba, Veracruz 2019 </h4>
            </div>
            <div className="slide">
                <img src={a8} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Xalapa, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a9} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Xalapa, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a10} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Córdoba, Veracruz 2019</h4>
            </div>
            <div className="slide">
                <img src={a11} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Xalapa, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a12} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Muestra Estatal de Teatro, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a13} />
                <h4><strong>Mujeres En El Encierro</strong> Oaxaca, México 2017</h4>
            </div>
            <div className="slide">
                <img src={a14} />
                <h4><strong>Mujeres En El Encierro</strong> CDMX 2017</h4>
            </div>
            <div className="slide">
                <img src={a15} />
                <h4><strong>Mujeres En El Encierro</strong> Oaxaca, México 2017</h4>
            </div>
            <div className="slide">
                <img src={a16} />
                <h4><strong>Mujeres En El Encierro</strong> Programa de mano</h4>
            </div>
            <div className="slide">
                <img src={a17} />
                <h4><strong>Laura Vetchínova</strong> 1990</h4>
            </div>
            <div className="slide">
                <img src={a18} />
                <h4><strong>-CHAYKA-</strong> Oaxaca, México 2020</h4>
            </div>
            <div className="slide">
                <img src={a19} />
                <h4><strong>-CHAYKA-</strong> Xalapa, Veracruz 2021 </h4>
            </div>
            <div className="slide">
                <img src={a20} />
                <h4><strong>-CHAYKA-</strong> Pocoapoco Oaxaca, México 2022</h4>
            </div>
            <div className="slide">
                <img src={a21} />
                <h4><strong>Oaxaqueña-Rusa</strong></h4>
            </div>
            <div className="slide">
                <img src={a22} />
                <h4><strong>-Actriz de teatro y cine</strong></h4>
            </div>
            <div className="slide">
                <img src={a1} />  
                <h4><strong>Metro</strong> San Petersburgo, Rusia 2014</h4> 
            </div>
            <div className="slide">
                <img src={a2} />
                <h4><strong>Metro</strong> Programa de mano. San Petersburgo, Rusia 2014</h4>
            </div>
            <div className="slide">
                <img src={a3} />
                <h4><strong>El Idiota.2012</strong> San Perterburgo, Rusia 2012</h4> 
            </div>
            <div className="slide">
                <img src={a4} />
                <h4><strong>Estrellas Enterradas</strong> Nota de prensa de obra. Oaxaca, México 2016</h4>
            </div>
            <div className="slide">
                <img src={a5} />
                <h4><strong>Estrellas Enterradas</strong> Oaxaca, México 2016</h4>
            </div>
            <div className="slide">
                <img src={a6} />
                <h4><strong>Estrellas Enterradas</strong> Oaxaca, México 2016</h4>
            </div>
            <div className="slide">
                <img src={a7} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Córdoba, Veracruz 2019 </h4>
            </div>
            <div className="slide">
                <img src={a8} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Xalapa, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a9} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Xalapa, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a10} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Córdoba, Veracruz 2019</h4>
            </div>
            <div className="slide">
                <img src={a11} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Xalapa, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a12} />
                <h4><strong>Ítaca. Bitácora de Viaje</strong> Muestra Estatal de Teatro, Veracruz 2017</h4>
            </div>
            <div className="slide">
                <img src={a13} />
                <h4><strong>Mujeres En El Encierro</strong> Oaxaca, México 2017</h4>
            </div>
            <div className="slide">
                <img src={a14} />
                <h4><strong>Mujeres En El Encierro</strong> CDMX 2017</h4>
            </div>
            <div className="slide">
                <img src={a15} />
                <h4><strong>Mujeres En El Encierro</strong> Oaxaca, México 2017</h4>
            </div>
            <div className="slide">
                <img src={a16} />
                <h4><strong>Mujeres En El Encierro</strong> Programa de mano</h4>
            </div>
            <div className="slide">
                <img src={a17} />
                <h4><strong>Laura Vetchínova</strong> 1990</h4>
            </div>
            <div className="slide">
                <img src={a18} />
                <h4><strong>-CHAYKA-</strong> Oaxaca, México 2020</h4>
            </div>
            <div className="slide">
                <img src={a19} />
                <h4><strong>-CHAYKA-</strong> Xalapa, Veracruz 2021 </h4>
            </div>
            <div className="slide">
                <img src={a20} />
                <h4><strong>-CHAYKA-</strong> Pocoapoco Oaxaca, México 2022</h4>
            </div>
            <div className="slide">
                <img src={a21} />
                <h4><strong>Oaxaqueña-Rusa</strong></h4>
            </div>
            <div className="slide">
                <img src={a22} />
                <h4><strong>-Actriz de teatro y cine</strong></h4>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default SaberMas