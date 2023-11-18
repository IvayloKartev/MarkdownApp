import React from "react";
import P from "./PlainText";
import H1 from "./Heading1";

export default function TextProcessor({text}){
    let inputText = String(text);
    let OutPutElements = [];
    for(let i=0; i<inputText.length; i++){
        if(inputText[i]==='\n'){
            let ind = i-1;
            let outputStr = String("");
            while(inputText[ind]!='\n' && ind>0){
                outputStr += inputText[ind];
                ind--;
            }
            OutPutElements.push(<P value={outputStr}/>);
        }
        else if (inputText[i]==='#'){
            let ind = i+1;
            let outputStr = String("");
            while(inputText[ind]!='\n' && ind<inputText.length-1){
                outputStr += inputText[ind];
                ind++;
            }
            OutPutElements.push(<H1 value={outputStr}/>);
        }
    }
    return (
        <>
            {OutPutElements}
        </>
    );
}