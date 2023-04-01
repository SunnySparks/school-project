import React from 'react';
import Header from './Header';
import '../../styles/global.scss';
/*import VideoBg from "reactjs-videobg";
import p8 from "../../videos/p8.mp4";
import '../../styles/videobg.scss';*/

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
