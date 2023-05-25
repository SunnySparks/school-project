import React from 'react'
import Header from '../../Components/Layout/Header';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import '../../styles/global.scss';
import img1 from '../../images/perfsm/perf1.webp';
import img2 from '../../images/perfsm/perf2.webp';
import img3 from '../../images/perfsm/perf3.webp';
import img4 from '../../images/perfsm/perf4.webp';

const SaberMas = () => {
  return (
    <>
    <Header />
        <Fade left duration={2800}>
            <div className='subTitleCont'>
                <h2 className="subpageTitle">Trabajos Destacados</h2>
            </div>
            <div id="perfGrid">
                <div id="gridCont">
                    <div id="grid1">
                        <Link  href="../GBS/Gbs" className="gridLink">
                        <div class="projectTitle">
                            <h2>Gente Bañándose Sola</h2>
                        </div>
                        <img src={img1}></img>
                        </Link>
                    </div>
                    <div id="grid2">
                        <div className="gridLink">
                            <div class="projectTitle">
                                <h2>proyecto 2</h2>
                            </div>
                            <img src={img2}></img>
                        </div>
                    </div>
                    <div id="grid3">
                        <div className="gridLink">
                            <div class="projectTitle">
                                <h2>proyecto 3</h2>
                            </div>
                            <img src={img3}></img>
                        </div>
                    </div>
                    <div id="grid4">
                        <div className="gridLink">
                            <div class="projectTitle">
                                <h2>proyecto 4</h2>
                            </div>
                            <img src={img4}></img>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    </>
  )
}

export default SaberMas