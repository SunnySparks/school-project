import React from 'react';
import './actriz.scss';
import img from '../../images/actrizportada1.webp';
import img2 from '../../images/actrizportada2.webp';


const Actriz = () => {
  return (
    <div id="actrizCont">
      <h2 className="webfont">Actriz</h2>
      <div className="wrapper">
        <div id="imgCont">
        <img src={img} alt="Actriz" id="portada1"/>
        <img src={img2} alt="Actriz" id="portada2"/>
        </div>
        <div id="textCont">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum pulvinar condimentum. Quisque id vulputate enim. Nam gravida non felis vitae pulvinar. Nunc eget tincidunt justo, et dictum mauris. Mauris mattis lacus efficitur sapien porta fringilla. Curabitur dictum mi maximus odio fringilla imperdiet. Aenean euismod metus nulla, volutpat vestibulum lacus dapibus a. Quisque lacus urna, dapibus at lorem ut, malesuada ultricies nunc. Aliquam vestibulum luctus mauris, vitae tincidunt ligula blandit quis. Suspendisse tincidunt magna mi, non faucibus lectus mattis a. Vestibulum egestas mi venenatis dapibus semper.</p>
        </div>
      </div>
      <div className="home-buttons webfont">
        <a href="#">Saber Más</a>
      </div>
    </div>
  )
}

export default Actriz