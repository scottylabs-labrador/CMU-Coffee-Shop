import React from 'react';
import './App.css';
import coffeecup from './Assets/placeholder.png';

function App() {
  return (
    <div className="App">

      <div className="container-fluid text-center pt-5 display-1">
        Coffee Shop
      </div>

      <img src={coffeecup} className="mt-5 round" alt="coffeecup" />

      <div className="row mt-5">
      <div className="col-3"></div>
      <div className="col-6">
        <div className="alert alert-secondary h3">Find a CMU cafe to study in!</div>
      </div>
      <div className="col-3"></div>
    </div>

    </div>

  );
}

export default App;
