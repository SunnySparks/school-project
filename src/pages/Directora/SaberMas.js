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
    </div>
  )
}

export default SaberMas