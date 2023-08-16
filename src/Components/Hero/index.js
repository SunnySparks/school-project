import { Link } from 'gatsby';
import React from 'react';
import './presentacion.scss';
import img from '../../images/badge.png'
const Hero = () => {
  return (
    <div id='inicio'>
      <div id='layoutCont'>
        <div id='title'>
          <h1 className='webfont'>
            Sunshine<br></br>University 
          </h1>
          <img src={img} />
        </div>
        <div id='linksCont'>
          <Link className='navLink webfont' href='#actrizCont'>
            <span>{`Galería`}</span>
            <div className='liquid'></div>
          </Link>
          <Link className='navLink webfont' href={`#directoraCont`}>
            <span>{`Nuestra Escuela`}</span>
            <div className='liquid'></div>
          </Link>
          <Link className='navLink webfont' href='#performerCont'>
            <span>{`Premios`}</span>
            <div className='liquid'></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
