import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [buttonClick , setButtonClick] = useState(false);

  function handleClick(){
    setButtonClick(true);
  }

  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button 
        id="click"
        onClick={handleClick}
      >Click Me</button>
      {buttonClick && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
      )}
    </div>
  );
}


export default App;
