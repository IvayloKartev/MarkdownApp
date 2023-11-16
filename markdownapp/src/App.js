import logo from './logo.svg';
import './App.css';
import Editor from './WritePad';
import Output from './OutPad';

function App() {
  return (
    <main className="main-content">
      <Editor />
      <Output />
    </main>
  );
}

export default App;
