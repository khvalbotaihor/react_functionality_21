import React from 'react';
import './App.css';

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

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star() {
    console.log("Star is rendering")
    return <div>start</div>
}

function Accordion() {
    console.log("Accordion is rendering")
    return(<div>
            <AccordionTitle />
            <AccordionBody />

        </div>

    )
}

function AccordionTitle() {
    console.log("Accordion titlr")
    return(
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    console.log("Accordion body")
    return  <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default App;
