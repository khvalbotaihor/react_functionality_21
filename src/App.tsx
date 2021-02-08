import React from 'react';
import './App.css';
import Accordion from "../src/components/Accordion/Accordions";
import {Rating} from "./components/Rating/Rating";
import {strict} from "assert";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends!"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"New menu"}/>
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

type pageTitlePropsType = {
    title: string
}

function PageTitle(props: pageTitlePropsType ) {
    console.log("PageTitle rendering")

    return(
        <h1>{props.title}</h1>
)

}

export default App;
