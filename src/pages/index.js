import React from 'react';
import Layout from '../Components/Layout';
import '../styles/videobg.scss';
import '../styles/global.scss';
import Hero from '../Components/Hero';
import Performer from '../Components/Performer';
import Actriz from '../Components/Actriz';
import AsesoraCreativa from '../Components/AsesoraCreativa';
import DirectoraEscenica from '../Components/DirectoraEscenica';
const Index = () => {
  return (
    <Layout>
      <Hero />
      <Actriz />
      <DirectoraEscenica />
      <Performer />
      <AsesoraCreativa />
    </Layout>
  );
};

export default Index;
