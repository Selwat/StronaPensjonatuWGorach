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
        <p>Apartamenty</p>
      </div>
      <div className="zdj">
        <img src={widoki} alt="Widok na góry" />
        <p>widok na góry</p>
      </div>
      <div className="zdj">
        <img src={ogrod} alt="Ogród" />
        <p>ogród</p>
      </div>
      <div className="zdj">
        <img src={zwierzeta} alt="Zwierzęta domowe są akceptowalne" />
        <p>zwierzęta domowe są akceptowalne</p>
      </div>
      <div className="zdj">
        <img src={pralka} alt="Pralka" />
        <p>pralka</p>
      </div>
      <div className="zdj">
        <img src={wifi} alt="WiFi" />
        <br />
        <p>WiFi</p>
      </div>
      <div className="zdj">
        <img src={balkon} alt="Balkon" />
        <br />
        <p>balkon</p>
      </div>
      <div className="zdj">
        <img src={sauna} alt="Sauna" />
        <br />
        <p>sauna</p>
      </div>
    </div>
  );
};

export default Wyposazenie;
