import React, {useEffect, useState} from 'react';
import {JokeTape} from "../../types";
import JokeItem from "../../components/JokeItem/JokeItem";
import "./AppJokes.css";

const url = "https://api.chucknorris.io/jokes/random";

const AppJokes = () => {

  const [joke, setJoke] = useState<JokeTape[]>([{
    value: '',
    id: ''
  }])

  const fetchData = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const joke: JokeTape = await response.json();
      const newJoke = [{
        id: joke.id,
        value: joke.value
      }]
      setJoke(newJoke)
    }
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="joke">
      <h1>Jokes with Chuck Norris:</h1>
      {joke.map((item) => {
        return <JokeItem joke={item.value}
                         key={item.id}/>
      })}
      <button
        onClick={fetchData}
      >New Joke
      </button>
    </div>
  );
};

export default AppJokes;