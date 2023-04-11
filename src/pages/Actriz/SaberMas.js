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
    <div id="sliderCont">
        <div className="slider">
        <div className="slideTrack">
            <div className="slide">
                <img src={a1} />   
            </div>
            <div className="slide">
                <img src={a2} /> 
            </div>
            <div className="slide">
                <img src={a3} /> 
            </div>
            <div className="slide">
                <img src={a4} />
            </div>
            <div className="slide">
                <img src={a5} />
            </div>
            <div className="slide">
                <img src={a6} />
            </div>
            <div className="slide">
                <img src={a7} />
            </div>
            <div className="slide">
                <img src={a8} />
            </div>
            <div className="slide">
                <img src={a9} />
            </div>
            <div className="slide">
                <img src={a10} />
            </div>
            <div className="slide">
                <img src={a11} />
            </div>
            <div className="slide">
                <img src={a12} />
            </div>
            <div className="slide">
                <img src={a13} />
            </div>
            <div className="slide">
                <img src={a14} />
            </div>
            <div className="slide">
                <img src={a15} />
            </div>
            <div className="slide">
                <img src={a16} />
            </div>
            <div className="slide">
                <img src={a17} />
            </div>
            <div className="slide">
                <img src={a18} />
            </div>

            /*Duplicate*/

            <div className="slide">
                <img src={a1} />   
            </div>
            <div className="slide">
                <img src={a2} /> 
            </div>
            <div className="slide">
                <img src={a3} /> 
            </div>
            <div className="slide">
                <img src={a4} />
            </div>
            <div className="slide">
                <img src={a5} />
            </div>
            <div className="slide">
                <img src={a6} />
            </div>
            <div className="slide">
                <img src={a7} />
            </div>
            <div className="slide">
                <img src={a8} />
            </div>
            <div className="slide">
                <img src={a9} />
            </div>
            <div className="slide">
                <img src={a10} />
            </div>
            <div className="slide">
                <img src={a11} />
            </div>
            <div className="slide">
                <img src={a12} />
            </div>
            <div className="slide">
                <img src={a13} />
            </div>
            <div className="slide">
                <img src={a14} />
            </div>
            <div className="slide">
                <img src={a15} />
            </div>
            <div className="slide">
                <img src={a16} />
            </div>
            <div className="slide">
                <img src={a17} />
            </div>
            <div className="slide">
                <img src={a18} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default SaberMas