import React from "react";
import firstpct from './obrazy/zdj1.jpg';
import secondpct from './obrazy/zdj2.jpg';
import thirdpct from './obrazy/zdj3.jpg';
import fourpct from './obrazy/zdj4.jpeg';
import fifepct from './obrazy/zdj5.jpg';

const Galeria = () => {
  return (
    <div className="galeria">
      <img src={firstpct} id="firstpct" alt="firstpct" />
      <img src={secondpct} id="secondpct" alt="secondpct" />
      <img src={thirdpct} id="thirdpct" alt="thirdpct" />
      <img src={fourpct} id="fourpct" alt="fourpct" />
      <img src={fifepct} id="fifepct" alt="fifepct" />
    </div>
  );
};

export default Galeria;
