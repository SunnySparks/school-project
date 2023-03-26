import React  from 'react';
import Layout from '../Components/Layout'
//import '../styles/global.sass';
import '../styles/videobg.scss';
import VideoBg from "reactjs-videobg";
import p8 from "../videos/p8.mp4";
import '../styles/global.scss';

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

const Index = () => {
  return <>        
        <Layout navOptions={navOptions}>Index</Layout>
  </>
}

export default Index;

/*<VideoBg>
    <VideoBg.Source src={p8} type="video/mp4" />
  </VideoBg>*/