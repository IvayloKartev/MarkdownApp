import React, { useState } from 'react';
import Header from './HeadBanner';
import TextBody from './TextBody';

export let realInput;
export default function Editor({value , handleInputChange}) {

  return (
    <div>
      <Header title="Editor" width={{ width: '30vw' }} />
      <TextBody width={{ width: '29.7vw' }} type="input" value={value} onChange={handleInputChange}/>
    </div>
  );
}
