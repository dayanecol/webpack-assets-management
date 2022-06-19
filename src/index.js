// import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";

import "./assets/style.css";
import gato from "./assets/gato.jpeg";


const request = axios.get("https://cat-fact.herokuapp.com/facts");
const root = document.querySelector(".root");

request.then(response => {
    root.innerHTML = `
        <div>
            <h1>Wiki dos gatos!</h1>
            <img src=${gato} />
            <ul>
                ${response.data.map(fact => `
                <li>${fact.text}</li>
                `).join('')}
            </ul>
        </div>
            
        `;
});
