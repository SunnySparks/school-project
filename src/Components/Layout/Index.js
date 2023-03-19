import React from 'react';
import Header from './Header';
import Obras from './Obras';
import Presentacion from './Presentacion';
//import SexyBurger from './SexyBurger';
/*import VideoBg from "reactjs-videobg";
import p8 from "../../videos/p8.mp4";
import '../../styles/videobg.scss';*/

const Layout = ({ navOptions }) => {
    return (
      <>
        <Header navOptions={navOptions} />
        <Presentacion />
        <Obras />
      </>
    );
  };
  
  export default Layout;