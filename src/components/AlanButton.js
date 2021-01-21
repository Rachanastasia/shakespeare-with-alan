import React from 'react';
import ReactDOM from 'react-dom';
import alanBtn from "@alan-ai/alan-sdk-web";

function AlanButton() {

  alanBtn({
    key: "78907422e81aa61487f9b5348554e7192e956eca572e1d8b807a3e2338fdd0dc/stage",
    rootEl: document.getElementById('alan-button')
  })

  return ReactDOM.createPortal(
    <div className='modal'>

    </div>, document.getElementById('alan-button')
  )
}

export default AlanButton;
