import React from "react";
import logo from './obrazy/logodomki.png';

const Baner = () => {
  return (
    <div className="baner">
      <img src={logo} id="logo" alt="logo" />
      <div className="galeria-baner">Galeria</div>
      <div className="oferta">Oferta</div>
      <div className="cennik">Opis</div>
      <div className="kontakt">Dostępność</div>
    </div>
  );
};

export default Baner;
