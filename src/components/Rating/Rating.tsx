import React from "react";
import s from "./Rating.module.css"

export function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type starPropsType = {
    selected: boolean
}

function Star(props: starPropsType) {
    console.log("Star is rendering")
    return <span className={props.selected ? s.selected : ""}>start </span>
}