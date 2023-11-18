/*import React from "react";
import P from "./TextComponents/PlainText";
import H1 from "./TextComponents/Heading1";
import H2 from "./TextComponents/Heading2";
import H3 from "./TextComponents/Heading3";
 

export default function TextProcessor({text}){
    let inputText = String(text);
    let OutPutElements = [];
    let lock = Boolean(false);
    let lockInd = Number(0);
    let rows = inputText.split('\n');
    for(let j=0; j<rows.length; j++){

        let type = String("");
        let outputStr = String("");

        for(let i=0; i<rows[j].length; i++){            
            if (rows[j][0]==='#' && rows[j][1]===' '){
                let ind = 2;
                outputStr = rows[j].slice(ind, rows[j].length);
                type = "h1";
                console.log(outputStr);
            }
            else if (rows[j][0]==='#' && rows[j][1]==='#' && rows[j][2]===' '){
                let ind = 3;
                outputStr = rows[j].slice(ind, rows[j].length);
                type = "h2";
                console.log(outputStr);
            }
            else if (rows[j][0]==='#' && rows[j][1]==='#' && rows[j][2]==='#' && rows[j][3]===' '){
                let ind = 4;
                outputStr = rows[j].slice(ind, rows[j].length);
                type = "h3";
                console.log(outputStr);
            }
            else {
                outputStr = rows[j];
                type = "p";
            }
        }
        if(type === "p") OutPutElements.push(<P value={outputStr}/>);
        if(type === "h1") OutPutElements.push(<H1 value={outputStr}/>);
        if(type === "h2") OutPutElements.push(<H2 value={outputStr}/>);
        if(type === "h3") OutPutElements.push(<H3 value={outputStr}/>);
    }
    //if(OutPutElements.length === 0)  OutPutElements.push(<P value={inputText}/>);
    function rev(str){
        let str1 = String(str);
        let res = String("");
        for(let i=str1.length-1; i>=0; i--){
            res += str1[i];
        }
        return res;
    }
    return (
        <>
            {OutPutElements}
        </>
    );
}
/*else if (inputText[i]==='#'){
    let ind = i+1;
    let outputStr = String("");
    while(inputText[ind]!='\n' && ind<inputText.length-1){
        outputStr += inputText[ind];
        ind++;
    }
    OutPutElements.push(<H1 value={outputStr}/>);
}*/