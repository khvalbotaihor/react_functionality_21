import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <div>hello</div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let a = {
    name: "Dimich",
    age: 110,
    address: {
        city: "Minsk",
        country: "Belarus"
    }
};


let users = [
    {
        name: "Dimich",
        age: 110,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Victor",
        age: 110,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    }
]

console.log(users[0].name)



let b : Array< number | string>
b = [1,2,3,4,5]
b = [1,2, "aaa", "fff"]



























