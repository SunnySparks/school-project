import React from 'react';
import '../../style.scss';
import Header from '../../../../Components/Layout/Header';
import a1 from '../../../../images/perfsm/gbs/6/1.webp';
import a2 from '../../../../images/perfsm/gbs/6/2.webp';
import a3 from '../../../../images/perfsm/gbs/6/3.webp';
import a4 from '../../../../images/perfsm/gbs/6/4.webp';
import a5 from '../../../../images/perfsm/gbs/6/5.webp';
import a6 from '../../../../images/perfsm/gbs/6/6.webp';
import a7 from '../../../../images/perfsm/gbs/6/7.webp';
import a8 from '../../../../images/perfsm/gbs/6/8.webp';

const MVUR = () => {
  return (
    <>
    <Header />
    <div className='gridCont'>
        <div className='subTitleCont'>
            <h2 className="subpageTitle">Montevideo, Uruguay</h2>
            <h3 className="subpageSubT">2017</h3>
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
            </div>
        </div>
    </div>
    </>
  )
}

export default MVUR