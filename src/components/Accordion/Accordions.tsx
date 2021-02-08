import React from "react";

type accordionTitle = {
    title: string
}
function Accordion(props: accordionTitle) {
    console.log("Accordion is rendering")
    return(<div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </div>

    )
}


type accordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: accordionTitlePropsType ) {
    console.log("Accordion titlr")
    return(
        <h3>{props.title}</h3>
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


export default  Accordion;