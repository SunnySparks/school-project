import React from 'react';
import '../../style.scss';
import Header from '../../../../Components/Layout/Header';
import Footer from '../../../../Components/Layout/Footer';
import a0 from '../../../../images/perfsm/gbs/1/0.webp';
import a1 from '../../../../images/perfsm/gbs/1/1.webp';
import a2 from '../../../../images/perfsm/gbs/1/2.webp';
import a3 from '../../../../images/perfsm/gbs/1/3.webp';
import a4 from '../../../../images/perfsm/gbs/1/4.webp';
import a5 from '../../../../images/perfsm/gbs/1/5.webp';
import a6 from '../../../../images/perfsm/gbs/1/6.webp';
import a7 from '../../../../images/perfsm/gbs/1/7.webp';
import a8 from '../../../../images/perfsm/gbs/1/8.webp';
import a9 from '../../../../images/perfsm/gbs/1/9.webp';
import a10 from '../../../../images/perfsm/gbs/1/10.webp';
import a11 from '../../../../images/perfsm/gbs/1/11.webp';
import a12 from '../../../../images/perfsm/gbs/1/12.webp';
import a13 from '../../../../images/perfsm/gbs/1/13.webp';
import a14 from '../../../../images/perfsm/gbs/1/14.webp';
import a15 from '../../../../images/perfsm/gbs/1/15.webp';


const Laboratorio = () => {
  return (
    <>
    <Header />
    <div id="laboCont" className='gridCont'>
        <div className='subTitleCont'>
            <h2 className="subpageTitle">Laboratorio de intervención al espacio privado</h2>
            <h3 className="subpageSubT">Muestra"Jabón" Xoxocotlán, Oaxaca 2017</h3>
      </div>
      <div id="laboGrid" className='gridOuter'>
        <div id="lGrid1" className='grid1'>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a0}/>
                </div>
            </div>
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
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a6}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a7}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a8}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a9}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a10}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a11}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a12}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a13}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a14}/>
                </div>
            </div>
            <div className='gridInner'>
                <div className='innerimage'>
                    <img src={a15}/>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Laboratorio