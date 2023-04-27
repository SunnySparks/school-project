import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import '../../styles/global.scss';
import '../../pages/Actriz/SaberMas'

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/Actriz/SaberMas', text: 'Actriz' },
  { link: '/Directora/SaberMas', text: 'Directora Escenica' },
  { link: '/Performer/SaberMas', text: 'Performer' },
  { link: '/asesoraCreativa', text: 'Asesora Creativa' },
  { link: '/sobreMi', text: 'Sobre Mi' },
  { link: '/#', text: 'Contacto' },
];

const NavBar = () => {
  return (
    <div id='navCont'>
      {navOptions.map(({ link, text }, i) => (
        <Link className='navLink' key={i} href={link}>
          {text}
        </Link>
      ))}
      <div id="iconsCont">
        <div className='iconInner'>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className='iconInner'>
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className='iconInner'>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className='iconInner'>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className='iconInner'>
          <FontAwesomeIcon icon={faPinterest} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

//Puedes usar tanto className y activeClassName, para aplicar un estilo diferente cuando estás en esa página
