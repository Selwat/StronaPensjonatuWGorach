import React from "react";
import Baner from "./Components/baner";
import Galeria from "./Components/galeria";
import Wyposazenie from "./Components/wyposazenie";
import Opis from "./Components/opis";
import Atuty from "./Components/AtutyObiektu";
import "./style.css";
const App = () => {
    return(
        <>
            <Baner />
            <Galeria />
            <Wyposazenie />
            <div className="OpisWApp">
            <Opis /> 
            <Atuty />
            </div>
        </>
    );
};

export default App;