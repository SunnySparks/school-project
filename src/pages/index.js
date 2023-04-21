import React from 'react';
import Layout from '../Components/Layout';
import '../styles/videobg.scss';
import '../styles/global.scss';
import Hero from '../Components/Hero';
import Performer from '../Components/Performer';
import Actriz from '../Components/Actriz';
import AsesoraCreativa from '../Components/AsesoraCreativa';
import DirectoraEscenica from '../Components/DirectoraEscenica';
import Testimonios from '../Components/Testimonios';
import AlMomento from '../Components/AlMomento';
import SobreMi from '../Components/SobreMi';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SobreMi />
      <Actriz />
      <DirectoraEscenica />
      <Performer />
      <AsesoraCreativa />
      <Testimonios />
      <AlMomento />
    </Layout>
  );
};

export default Index;
