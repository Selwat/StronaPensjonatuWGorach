import React from "react";
import Baner from "./Components/baner";
import Galeria from "./Components/galeria";
import Wyposazenie from "./Components/wyposazenie";
import Opis from "./Components/opis";
import "./style.css";
const App = () => {
    return(
        <>
            <Baner />
            <Galeria />
            <Wyposazenie />
            <Opis />
        </>
    );
};

export default App;