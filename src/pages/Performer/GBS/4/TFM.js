import React from 'react';
import '../../style.scss';
import Header from '../../../../Components/Layout/Header';
import a1 from '../../../../images/perfsm/gbs/4/1.webp';
import a2 from '../../../../images/perfsm/gbs/4/2.webp';
import a3 from '../../../../images/perfsm/gbs/4/3.webp';
import a4 from '../../../../images/perfsm/gbs/4/4.webp';
import a5 from '../../../../images/perfsm/gbs/4/5.webp';
import a6 from '../../../../images/perfsm/gbs/4/6.webp';
import a7 from '../../../../images/perfsm/gbs/4/7.webp';
import a8 from '../../../../images/perfsm/gbs/4/8.webp';
import a9 from '../../../../images/perfsm/gbs/4/9.webp';
import a10 from '../../../../images/perfsm/gbs/4/10.webp';
import a11 from '../../../../images/perfsm/gbs/4/11.webp';
import a12 from '../../../../images/perfsm/gbs/4/12.webp';

const TFM = () => {
  return (
    <>
    <Header />
    <div className='gridCont'>
        <div className='subTitleCont'>
            <h2 className="subpageTitle">Festival "Teatro para el fin del mundo"</h2>
            <h3 className="subpageSubT">Tampico, Tamaulipas 2017</h3>
        </div>
        <div id="laboGrid" className='gridOuter'>
            <div id="lGrid1" className='grid1'>
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
            </div>
        </div>
    </div>
    </>
  )
}

export default TFM