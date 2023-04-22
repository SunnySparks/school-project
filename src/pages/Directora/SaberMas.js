import React from 'react';
import './style.scss';
import '../../styles/global.scss'

const SaberMas = () => {
  return (
    <div>
        <div id="direcTitle" className="webfont">
        <h2>Directora Escenica</h2>
        <h3>Video Muestra Srita. Julia(2018)</h3>
        </div>
        <div id="frameCont">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/z8nss7XgU2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        </div>
        <div id="secondText">
          <ul>
            <li>
              2018 Lectura dramatizada: LA GOTA Y EL MAR para la Extensión del Festival de la Joven Dramaturgia
            </li>
            <li>
              <p>2018 SRITA. JULIA Idea original, texto y dirección.</p>
            </li>
          </ul>
          <p>Pieza realizada a través de ejercicios teatrales a partir del monólogo -Campo de estrellas- de Luisa Josefina Hernández y experiencias vivenciales de la actriz. Intervención a la Biblioteca de la Universidad La Salle Oaxaca</p>
          <ul>
            <li>
              <p>
              2018 EL MISTERIO DE ABEL BROCKENHAUS de Martín Zapata
              </p>
            </li>
            <li>
              <p>2018. GENTE BAÑÁNDOSE SOLA. Intervención a complejo habitacional. Creación colectiva</p>
            </li>
            <li>
              <p>2018 ANTÍGONA. Monólogo para actriz a partir de fragmento del texto original de Sófocles y ejercicios teatrales de distanciamiento brechtiano. Texto y dirección</p>
            </li>
            <li>
              <p>2019 Espectáculo Inaugural para Festival Nacional de Arte y Cultura. Idea original, texto y dirección.</p>
            </li>
            <li>
              <p>2020 LUGARES QUE HABITO. Idea original, texto y dirección. Proyecto beneficiado por la Secretaría de Culturas</p>
            </li>
            <li>
              <p>2021 DUALIDAD. Texto y dirección. </p>
            </li>
            <li>
              <p>2021 y 2022 Dirección artística para Festival Tierra de los Muertos </p>
            </li>
          </ul>
        </div>
        <div id="secondVideo">
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fseculta%2Fvideos%2F1011028679405370%2F&show_text=false&width=560&t=0" width="560" height="314"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </div>
        <div id="thirdVideo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/18DeG2vrhIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default SaberMas