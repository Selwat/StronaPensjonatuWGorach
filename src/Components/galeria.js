import React from "react";
import firstpct from './obrazy/zdj1.jpg';
import secondpct from './obrazy/zdj2.jpg';
import thirdpct from './obrazy/zdj3.jpg';
import fourpct from './obrazy/zdj4.jpeg';
import fifepct from './obrazy/zdj5.jpg';

const Galeria = () => {
  return (
    <div className="galeria">
      <div className="row1">
        <img src={firstpct} id="firstpct" alt="firstpct" />
        <img src={secondpct} id="secondpct" alt="secondpct" />
      </div>
      <img src={thirdpct} id="thirdpct" alt="thirdpct" />
      <div className="row2">
        <img src={fourpct} id="fourpct" alt="fourpct" />
        <img src={fifepct} id="fifepct" alt="fifepct" />
      </div>
    </div>
  );
};

export default Galeria;
