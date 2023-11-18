import React from "react";
import "../css/App.css";

export default function H1({value}){
    return (
        <>
            <h1 className="text-contents">{value}</h1>
            <hr className="text-contents"></hr>
        </>
    )
}