import React from 'react';
import { Link } from 'gatsby';

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/actriz', text: 'Actriz' },
  { link: '/performer', text: 'Performer' },
  { link: '/asesoraCreativa', text: 'Asesora Creativa' },
  { link: '/directoraEscenica', text: 'Directora Escenica' },
  { link: '/performer', text: 'Performer' },
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
    </div>
  );
};

export default NavBar;

//Puedes usar tanto className y activeClassName, para aplicar un estilo diferente cuando estás en esa página
