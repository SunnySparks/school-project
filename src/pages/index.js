import React from 'react';
import Layout from '../Components/Layout';
import '../styles/videobg.scss';
import '../styles/global.scss';
import Hero from '../Components/Hero';
import Performer from '../Components/Performer';
import OfertaAcademica from '../Components/OfertaAcademica';
import AsesoraCreativa from '../Components/AsesoraCreativa';
import DirectoraEscenica from '../Components/DirectoraEscenica';
import Testimonios from '../Components/Testimonios';
import AlMomento from '../Components/AlMomento';
import About from '../Components/About';
import Footer from '../Components/Layout/Footer'

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <OfertaAcademica />
      <DirectoraEscenica />
      <Performer />
      <AsesoraCreativa />
      <Testimonios />
      <AlMomento /> 
      <Footer />    
    </Layout>
  );
};

export default Index;
