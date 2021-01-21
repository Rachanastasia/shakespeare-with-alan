import React, { useEffect, useRef } from 'react';
import './css/variables.css';
import './css/main.css';
import './css/other.css';
import Header from './components/Header';
//import AlanButton from './components/AlanButton';
import alanBtn from "@alan-ai/alan-sdk-web";
import intent from '@alan-ai/alan-sdk-web';

function App() {
  const alanBtnInstance = useRef(null);

  intent("go back", p => {
    p.play("Testing this is cool");
    p.play({ command: "go:back" });
  })

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "78907422e81aa61487f9b5348554e7192e956eca572e1d8b807a3e2338fdd0dc/stage",
        rootEl: document.getElementById('alan-button'),
        onCommand: (commandData) => {
          if (commandData.command === "go:back") {
            console.log('WENT BACK')
          }
        }

      })
    }

  }, [])
  return (
    <main className="App">
      <Header />
    </main>
  );
}

export default App;
