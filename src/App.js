import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import { Fragment } from 'react';
import Counter from './components/Counter';
import Incrementer from './components/Incrementer';
import Calculator from './components/Calculator';
import Timer from './components/Timer';

function App() {
  return (
    <div class='App'>
      <div class='center'>
        <FirstComponent/>
        <div class='content'>
          <Timer></Timer>
        </div>
      </div>
    </div>
  );
}

export default App;
