import logo from './logo.svg';
import './App.css';
import Editor from './WritePad';
import Output from './OutPad';
import React,{useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <main className="main-content">
      <Editor value={inputValue} handleInputChange={handleInputChange}/>
      <Output value={inputValue}/>
    </main>
  );
}

export default App;
