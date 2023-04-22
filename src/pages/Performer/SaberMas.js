import React from 'react';
import './style.scss';
import '../../styles/global.scss';
import img1 from '../../images/perfsm/perf1.webp';
import img2 from '../../images/perfsm/perf2.webp';
import img3 from '../../images/perfsm/perf3.webp';
import img4 from '../../images/perfsm/perf4.webp';
import img5 from '../../images/perfsm/perf5.webp';
import img6 from '../../images/perfsm/perf6.webp';
import img7 from '../../images/perfsm/perf7.webp';
import img8 from '../../images/perfsm/perf8.webp';

const SaberMas = () => {
  return (
    <div>
        <div id="perfTitle">
            <h2>Performer</h2>
        </div>
        <div id="perfGrid">
            <div id="gridCont">
                <div id="grid1">
                    <img src={img1}></img>
                </div>
                <div id="grid2">
                    <img src={img2}></img>
                </div>
                <div id="grid3">
                    <img src={img3}></img>
                </div>
                <div id="grid4">
                    <img src={img4}></img>
                </div>
                <div id="grid5">
                    <img src={img5}></img>
                </div>
                <div id="grid6">
                    <img src={img6}></img>
                </div>
                <div id="grid7">
                    <img src={img7}></img>
                </div>
                <div id="grid8">
                    <img src={img8}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaberMas