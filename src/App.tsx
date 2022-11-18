import React from 'react';
import AppFilms from "./containers/AppFilms/AppFilms";
import './App.css'
import AppJokes from "./containers/AppJokes/AppJokes";

function App() {


  return (
    <div className="App">
      <AppFilms/>
      <AppJokes/>
    </div>
  );
}

export default App;
