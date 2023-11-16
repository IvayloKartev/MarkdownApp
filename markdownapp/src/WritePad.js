import TextBody from "./TextBody";
import Header from "./HeadBanner";
import React, { useState } from 'react';

export default function Editor() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    return (
      <div>
        <Header title="Editor" width={{ width: '30vw' }} />
        <TextBody width={{ width: '29.7vw' }} type="input" value={inputValue} onChange={handleInputChange}/>
      </div>
    );
  }