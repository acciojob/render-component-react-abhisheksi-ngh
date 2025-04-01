import React, {Component, useState} from "react";
import '../styles/App.css';

const LearningReact= ()=>{
  return <p>
    I am learning React. My life is getting better.
  </p>
};

const App = () => {
  return (
    <div id="main">
        <LearningReact/>
    </div>
  )
}


export default App;
