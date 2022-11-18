import React from 'react';
import AppFilms from "./containers/AppFilms/AppFilms";
import './App.css'
import AppJokes from "./containers/AppJokes/AppJokes";
import AppFilmsFunction from "./containers/AppFilmsFunction/AppFilmsFunction";

function App() {


  return (
    <div className="App">
      <AppFilms/>
      <AppFilmsFunction/>
      <AppJokes/>
    </div>
  );
}

export default App;
