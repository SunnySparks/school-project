import React from 'react';
import { Link } from 'gatsby';

const NavBar = ({ navOptions }) => {
    return (
      <div>
        {navOptions.map(({ link, text }, i) => (
          <div variant='link' href={link}>
            {text}
          </div>
        ))}
      </div>
    );
  };

export default NavBar