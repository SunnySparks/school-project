import React from 'react';
import Actriz from '../Components/Layout/Actriz';
import Header from '../Components/Layout/Header';

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/actriz', text: 'Actriz' },
  { link: '/performer', text: 'Performer' },
  { link: '/asesoraCreativa', text: 'Asesora Creativa' },
  { link: '/directoraEscenica', text: 'Directora Escenica' },
  { link: '/performer', text: 'Performer' },
  { link: '/sobreMi', text: 'Sobre Mi' },
];

const actriz = () => {
  return (
    <>
    <Header navOptions={navOptions} />
    <Actriz />
    </>
  )
}

export default actriz