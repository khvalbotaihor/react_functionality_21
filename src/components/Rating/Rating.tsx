import React from "react";
import s from "./Rating.module.css"

type ratingPropsValue = {
    value: number
}

export function Rating(props: ratingPropsValue) {
    console.log("Rating rendering")

    return (<div>
                <Star selected={props.value > 0 ? true : false}/>
                <Star selected={props.value > 1 ? true : false}/>
                <Star selected={props.value > 2 ? true : false}/>
                <Star selected={props.value > 3 ? true : false}/>
                <Star selected={props.value > 4 ? true : false}/>
            </div>)
}

type starPropsType = {
    selected: boolean
}

function Star(props: starPropsType) {
    console.log("Star is rendering")
    return <span className={props.selected ? s.selected : ""}>start </span>
}