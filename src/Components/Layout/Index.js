import React from 'react';
import Header from './Header';
import Inicio from './Inicio';
import Presentacion from './Presentacion';
import Actriz from './Actriz';
import Performer from './Performer';
import '../../styles/global.scss';
import AsesoraCreativa from './AsesoraCreativa';
import DirectoraEscenica from './DirectoraEscenica';
//import SexyBurger from './SexyBurger';
/*import VideoBg from "reactjs-videobg";
import p8 from "../../videos/p8.mp4";
import '../../styles/videobg.scss';*/

const Layout = ({ navOptions }) => {
    return (
      <div id="index">
        <Header navOptions={navOptions} />
        <Inicio />
        <Performer />
        <Actriz />
        <AsesoraCreativa />
        <DirectoraEscenica />
      </div>
    )
  }
  
  export default Layout;