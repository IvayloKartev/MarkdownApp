import React from 'react';
import "./css/App.css";
import TextProcessor from './TextProcessor';
import P from './TextComponents/PlainText';
import { marked } from 'marked';
import MarkDown from './Markdowner';

export default function TextBody({ width, type, value, onChange }) {
  
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  if (type === 'input') {
    return (
      <textarea
        id="editor"
        style={width}
        className="text-body"
        value={value}
        onChange={handleChange}
      ></textarea>
    );
  } else {
    console.log("work")
    return (
      <div style={width} className="output-text" id="preview">
         <MarkDown text={value}/>
      </div>
    );
  }
}
