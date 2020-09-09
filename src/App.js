import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import { useSelector } from 'react-redux';


function App() {
  const option = useSelector(state => state.option);
  return (
    <div className="app">
      <Header />

      <Nav />

      <Results option={option}/>
    </div>
  );
}

export default App;
