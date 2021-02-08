import React from 'react';
import './App.css';
import Accordion from "../src/components/Accordion/Accordions";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <AppTitle />
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is APP component</>
}

export default App;
