import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/presentacion.scss';
import '../../styles/global.scss';

const Presentacion = () => {
  return (
    <div id="title">
        <h1 className='webfont'>Laura Vetchinova</h1>
    </div>
  )
}

export default Presentacion;

/*
Presentacion
        <div className="block">
          <div className="animation">
            <div className="first">
        <StaticImage
          src={'../../images/florentine.jpg'} //la imagen se procesa en el momento de la compilación para StaticImage
          alt='Hero Image'
          placeholder='blurred'
          layout='constrained' //limita el tamaño de la imagen a los márgenes del contenedor
          loading='eager' //carga la imagen antes de que el resto de la página ya que se encuentra fuera del la carpeta del componente
          width={320}
          className="image"
        />
        <StaticImage
          src={'../../images/london.jpg'}
          alt='Hero Image'
          placeholder='blurred'
          layout='constrained'
          loading='eager'
          width={320}
          className="image"
        />
        <StaticImage
          src={'../../images/play.png'}
          alt='Hero Image'
          placeholder='blurred'
          layout='constrained'
          loading='eager'
          width={320}
          className="image"
        />
        <StaticImage
          src={'../../images/shadow.jpeg'}
          alt='Hero Image'
          placeholder='blurred'
          layout='constrained'
          loading='eager'
          width={320}
          className="image"
        />
        </div>
        </div>
        </div>
*/