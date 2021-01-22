import React, { useEffect, useRef, useState } from 'react';
import './css/variables.css';
import './css/main.css';
import './css/other.css';
import Header from './components/Header';
import Questions from './components/Questions';
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanBtnInstance = useRef(null);
  const [current, setCurrent] = useState(0);

  const arr = ['Lets do Shakespeare', 
    `I take thee at thy word.
    Call me but love, and I'll be new baptized.
    Henceforth I never will be Romeo.`,
    `By a name
    I know not how to tell thee who I am.
    My name, dear saint, is hateful to myself
    Because it is an enemy to thee.
    Had I it written, I would tear the word.`,
    'Neither, fair maid, if either thee dislike.'];

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "78907422e81aa61487f9b5348554e7192e956eca572e1d8b807a3e2338fdd0dc/stage",
        rootEl: document.getElementById('alan-button'),
        onCommand: (commandData) => {
          console.log('command ran')
   
            setCurrent(current + 1);
        
        }

      })
    }

  }, [])
  return (
    <main className="App">
      <Header />
      <Questions line={arr[current]}/>
    </main>
  );
}

export default App;
