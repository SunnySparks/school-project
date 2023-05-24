import React from 'react';
import './style.scss';
import '../../styles/global.scss';
import Header from '../../Components/Layout/Header';
import Fade from 'react-reveal/Fade';

const SaberMas = () => {
  return (
    <>
    <Header />
        <div id="direcTitle" className="webfont">
        <h2>Directora Escénica</h2>
        </div>
    <Fade left duration={2800}>
        <div id="frameCont">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/z8nss7XgU2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        </div>
        </Fade>
        <Fade right duration={2800}>
        <div id="secondText" className='webfont4'>
          <ul>
            <li>
              <span>2018 LA GOTA Y EL MAR</span> Lectura dramatizada para la Extensión del Festival de la Joven Dramaturgia
            </li>
            <li>
              <p><span>2018 SRITA. JULIA</span> Idea original, texto y dirección. Pieza realizada a través de ejercicios teatrales a partir del monólogo "Campo de estrellas" de Luisa Josefina Hernández y experiencias vivenciales de la actriz. Intervención a la Biblioteca de la Universidad La Salle Oaxaca</p>
            </li>
            <li>
              <p>
              <span>2018 EL MISTERIO DE ABEL BROCKENHAUS</span> de Martín Zapata
              </p>
            </li>
            <li>
              <p><span>2018 GENTE BAÑÁNDOSE SOLA</span> Intervención a complejo habitacional. Creación colectiva</p>
            </li>
            <li>
              <p><span>2018 ANTÍGONA</span> Monólogo para actriz a partir de fragmento del texto original de Sófocles y ejercicios teatrales de distanciamiento brechtiano. Texto y dirección</p>
            </li>
            <li>
              <p><span>2019</span> Espectáculo Inaugural para Festival Nacional de Arte y Cultura. Idea original, texto y dirección</p>
            </li>
            <li>
              <p><span>2020 LUGARES QUE HABITO</span> Idea original, texto y dirección. Proyecto beneficiado por la Secretaría de Culturas</p>
            </li>
            <li>
              <p><span>2021 DUALIDAD</span> Texto y dirección</p>
            </li>
            <li>
              <p><span>2021</span> y <span>2022</span> Dirección artística para Festival Tierra de los Muertos </p>
            </li>
          </ul>
        </div>
        </Fade>
        <Fade left duration={2800}>
        <div id="secondVideo">
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fseculta%2Fvideos%2F1011028679405370%2F&show_text=false&width=560&t=0" width="560" height="314"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </div>
        </Fade>
        <Fade right duration={2800}>
        <div id="thirdVideo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/18DeG2vrhIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </Fade>
    </>
  )
}

export default SaberMas