import React from 'react';
import './App.css';
import Accordion from "../src/components/Accordion/Accordions";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <AppTitle />
            Article 1
            <Rating value={3}/>
            <Accordion />
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is APP component</>
}

export default App;
