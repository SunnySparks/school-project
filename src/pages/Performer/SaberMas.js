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
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import '../../styles/global.scss'

const SaberMas = () => {
  return (
    <>
    <Header />
    <Fade left duration={2800}>
    <div className='subTitleCont'>
      <h2 className="subpageTitle webfont">Proyectos Destacados</h2>
      </div>
        <div id="perfGrid">
            <div id="gridCont">
                <div id="grid1">
                    <Link  href="../GBS/Gbs" className="gridLink">
                    <div className="projectTitle">
                        <h2>Gente Bañándose Sola</h2>
                    </div>
                    <img src={img1}></img>
                    </Link>
                </div>
                <div id="grid2">
                    <Link  href="../Galeria430/Galeria" className="gridLink">
                        <div class="projectTitle">
                            <h2>Galería 4:30</h2>
                        </div>
                        <img src={img2}></img>
                    </Link>
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
                <div id="grid5">
                    <div className="gridLink">
                        <div class="projectTitle">
                            <h2>proyecto 5</h2>
                        </div>
                        <img src={img5}></img>
                    </div>
                </div>
                <div id="grid6">
                    <div className="gridLink">
                        <div class="projectTitle">
                            <h2>proyecto 6</h2>
                        </div>
                        <img src={img6}></img>
                    </div>
                </div>
                <div id="grid7">
                    <div className="gridLink">
                        <div class="projectTitle">
                            <h2>proyecto 7</h2>
                        </div>
                        <img src={img7}></img>
                    </div>
                </div>
                <div id="grid8">
                    <div className="gridLink">
                        <div class="projectTitle">
                            <h2>proyecto 8</h2>
                        </div>
                        <img src={img8}></img>
                    </div>
                </div>
            </div>
        </div>
    </Fade>
    <Footer />
    </>
  )
}

export default SaberMas