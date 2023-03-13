import React from "react";
import localizationInfo from './obrazy/localizationInfo.png';
import parkingInfo from './obrazy/ParkingInfo.png';

const Atuty = () => {
  return (
    <div className="AtutyDiv">
        <h4>Atuty obiektu</h4>
        <p>
        <img src={localizationInfo} id="localizationInfo" alt="localizationInfo" />
        Świetna lokalizacja: wysoko oceniana przez Gości (9,3)
        <h4>Śniadanie</h4>
        <br />
        
        kontynentalne, wegetariańskie<br /><br />
        
        <img src={parkingInfo} id="parkingInfo" alt="parkingInfo" /> 
        Bezpłatny prywatny parking dostępny na miejscu </p>
        <button className="buttonAtuty">Zarezerwuj teraz</button>
    </div>
  );
};

export default Atuty;
