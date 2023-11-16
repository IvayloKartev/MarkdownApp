import React, { useState } from 'react';
import Header from './HeadBanner';
import TextBody from './TextBody';

export default function Editor() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div>
      <Header title="Editor" width={{ width: '30vw' }} />
      <TextBody width={{ width: '29.7vw' }} type="input" value={inputValue} onChange={handleInputChange}/>
    </div>
  );
}
