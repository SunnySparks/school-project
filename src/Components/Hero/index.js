import { Link } from 'gatsby';
import React from 'react';
import './presentacion.scss';
import img from '../../images/laura.png';

const Hero = () => {
  return (
    <div id='inicio'>
      <div id='layoutCont'>
        <div id='title'>
          <h1 className='webfont'>
            Laura<br></br>Vetchinova
          </h1>
          <img src={img} />
        </div>
        <div id='linksCont'>
          <Link className='navLink webfont' href='#actrizCont'>
            <span>{`Actriz`}</span>
            <div className='liquid'></div>
          </Link>
          <Link className='navLink webfont' href={`#directoraCont`}>
            <span>{`Directora Escénica`}</span>
            <div className='liquid'></div>
          </Link>
          <Link className='navLink webfont' href='#performerCont'>
            <span>{`Performer`}</span>
            <div className='liquid'></div>
          </Link>
          <Link className='navLink webfont' href={`#asesoraCont`}>
            <span>{`Asesora Creativa / Docente`}</span>
            <div className='liquid'></div>
          </Link>
          <Link className='navLink webfont' href="/Performer/GBS/Gbs">
            <span>{`¿Nos Bañamos Juntxs?`}</span>
            <div className='liquid'></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
