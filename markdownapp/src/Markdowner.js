import React from "react";
import { marked } from "marked";

export default function MarkDown({text}) {
    const renderer = new marked.Renderer();
    renderer.image = (href) => {
        return `<img src="${href}" width="90%">`;
    }
    renderer.code = (code, language, isEscaped) => {
        return `<pre style="background-color: white"><code class="${language}">${code}</code></pre>`;
    };
    renderer.table = (header, body) => {
        return `<table style="border: 1px solid black">${header}${body}</table>`;
    };
    renderer.tablerow = (content) => {
        return `<tr style="border: 1px solid black">${content}</tr>`
    }
    let inp = String(text);
    var rawMarkup = marked.parse(inp, {renderer});
    return <div dangerouslySetInnerHTML={{__html:marked(rawMarkup)}} />
}