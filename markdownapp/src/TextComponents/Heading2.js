import React from "react";
import "../css/App.css";

export default function H2({value}){
    return (
        <>
            <h2 className="text-contents">{value}</h2>
            <hr className="text-contents"></hr>
        </>
    )
}