import React from 'react';
import './App.css';
import P from './PlainText';
import TextProcessor from './TextProcessor';

export default function TextBody({ width, type, value, onChange }) {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  if (type === 'input') {
    return (
      <textarea
        style={width}
        className="text-body"
        value={value}
        onChange={handleChange}
      ></textarea>
    );
  } else {
    console.log("work")
    return (
      <div style={width} className="output-text">
        <TextProcessor text={value}/>
      </div>
    );
  }
}
