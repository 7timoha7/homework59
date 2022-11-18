import React, {useEffect, useState} from 'react';
import {FilmsTape} from "../../types";
import FilmCardFunction from "../../components/FilmCardFunction/FilmCardFunction";
import AddFilmsFunction from "../../components/AddFilmsFunction/AddFilmsFunction";
import "./AppFilmsFunction.css"

const local = localStorage.getItem('item') || '{}';
const newLocal = JSON.parse(local)
const AppFilmsFunction = () => {
  const [films, setFilms] = useState<FilmsTape[]>([]);

  useEffect(() => {
    if (newLocal.length > 0) {
      setFilms(newLocal)
    }
  }, []);

  localStorage.setItem('item', JSON.stringify(films));

  const addFilm = (newFilm: FilmsTape) => {
    setFilms(prev => [...prev, newFilm]);
  }

  const onChangeCardFilm = (changeFilm: FilmsTape, value: string) => {
    setFilms(prev => prev.map((item) => {
      return item.id === changeFilm.id ? {
        ...item,
        name: value
      } : item;
    }))
  }

  const btnDelete = (filmDelete: FilmsTape) => {
    setFilms(prev => prev.filter(item => item.id !== filmDelete.id));
  }

  return (
    <div className="AppFilmsFunction">
      <h2>App Films Function</h2>
      <AddFilmsFunction onFormSubmit={addFilm}/>
      <div className="films-cards">
        <h1>To watch list:</h1>
        {films.map((film) => {
          return <FilmCardFunction
            onClick={() => btnDelete(film)}
            films={film}
            key={film.id}
            onChange={onChangeCardFilm}
          />
        })}
      </div>
    </div>
  );
};

export default AppFilmsFunction;

