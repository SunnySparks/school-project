import React, {useState} from 'react';
//import NavBar from './NavBar';
import '../../styles/global.scss'
import '../../styles/header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
  <div id="header">
    <button className="fancy-burger" onClick={handleToggle}>
      <span className={`box ${isOpen ? "open" : null }`}></span>
      <span className={`rectangle rectangle--top rectangle--small ${isOpen ? "open" : null }`}></span>
      <span className={`rectangle rectangle--middle ${isOpen ? "open" : null }`}></span>
      <span className={`rectangle rectangle--bottom rectangle--small ${isOpen ? "open" : null }`}></span>
    </button>
    <ul>
      <li></li>
    </ul>
  </div>
  );
};

export default Header;