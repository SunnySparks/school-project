import React from 'react';
import { Link } from 'gatsby';

const NavBar = ({ navOptions }) => {
    return (
      <div id="navCont">
        {navOptions.map(({ link, text }, i) => (
            <Link className='navLink' key={i} href={link}>{text}</Link>
        ))}
      </div>
    )
  }

export default NavBar;

//Puedes usar tanto className y activeClassName, para aplicar un estilo diferente cuando estás en esa página
