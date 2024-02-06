import React from 'react';
import './App.css';
import Button from './Button/Button';
// @ts-ignore
const tg = window.Telegram.WebApp

function App() {
// method ready говорито том, что приложение проинициализировано
  React.useEffect(() => {       
    tg.ready()
  }, [])
  

  return (
    <div className="App">
      <Button/>
     <h1>Привет Медвед.</h1>
    </div>
  );
}

export default App;
