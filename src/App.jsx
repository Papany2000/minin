import React, { useEffect } from 'react';
import './App.css';
import { useTelegram} from './hook/useTelegram';


function App() {

const {onToogleButton} = useTelegram()
useEffect( () => {
  tg.ready()
}, [])
  return (
    <div className="App">
      <button onClick={onToogleButton}>Toogle</button>
     <h1>Привет Медвед.</h1>
    </div>
  );
}

export default App;
