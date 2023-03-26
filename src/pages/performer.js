import React from 'react';
import Performer from '../Components/Layout/Performer';
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

const performer = () => {
  return (
    <>
    <Header navOptions={navOptions} />
    <Performer />
    </>
  )
}

export default performer