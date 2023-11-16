import React, { useEffect } from 'react';
import './App.css';
import P from './PlainText';

export default function TextBody({ width, type, value, onChange }) {
  const handleChange = (event) => {
    console.log('event:', event);
    const newValue = event.target.value;
    console.log('newValue:', newValue);
    onChange(newValue);
  };

  useEffect(() => {
    console.log('TextBody re-rendered. Value:', value);
  }, [value]);

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
    return (
      <div style={width} className="output-text">
        <P value={value} />
      </div>
    );
  }
}
