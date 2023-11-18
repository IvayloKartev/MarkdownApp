import React from "react";
import "../css/App.css";

export default function P({value}){
    return (
        <pre className="output-p-text">{value}</pre>
    );
}