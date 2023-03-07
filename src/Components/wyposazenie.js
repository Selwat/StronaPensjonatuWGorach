import React from "react";
import apartamenty from "./obrazy/apartamenty.png";
import widoki from "./obrazy/widoki.png";
import ogrod from "./obrazy/ogrod.png";
import zwierzeta from "./obrazy/zwierzeta.png";
import pralka from "./obrazy/pralka.png";
import wifi from "./obrazy/wifi.png";
import balkon from "./obrazy/balkon.png";
import sauna from "./obrazy/sauna.png";

const Wyposazenie = () => {
  return (
    <div className="funkcje">
      <div className="zdj">
        <img src={apartamenty} alt="Apartamenty" />
        Apartamenty
      </div>
      <div className="zdj2">
        <img src={widoki} alt="Widok na góry" />
        <br />
        widok na góry
      </div>
      <div className="zdj2">
        <img src={ogrod} alt="Ogród" />
        <br />
        ogród
      </div>
      <div className="zdj2">
        <img src={zwierzeta} alt="Zwierzęta domowe są akceptowalne" />
        <br />
        zwierzęta<br />domowe są akceptowalne
      </div>
      <div className="zdj">
        <img src={pralka} alt="Pralka" />
        <br />
        pralka
      </div>
      <div className="zdj">
        <img src={wifi} alt="WiFi" />
        <br />
        WiFi
      </div>
      <div className="zdj">
        <img src={balkon} alt="Balkon" />
        <br />
        balkon
      </div>
      <div className="zdj">
        <img src={sauna} alt="Sauna" />
        <br />
        sauna
      </div>
    </div>
  );
};

export default Wyposazenie;
