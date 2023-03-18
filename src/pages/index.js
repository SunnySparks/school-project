import React, { useContext } from 'react';
import Layout from '../Components/Layout'
//import '../styles/global.sass';
import '../styles/videobg.scss';
import VideoBg from "reactjs-videobg";
import p8 from "../videos/p8.mp4";
import '../styles/global.scss'

const navOptions = [
  { link: '/', text: 'Inicio' }
];

const Index = () => {
  return <>
        <VideoBg>
          <VideoBg.Source src={p8} type="video/mp4" />
        </VideoBg>
    <Layout />
  </>
};

export default Index;