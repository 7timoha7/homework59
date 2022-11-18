import React, {useState} from 'react';
import {FilmsTape} from "../../types";

interface Props {
  onFormSubmit: (newFilm: FilmsTape) => void;
}

const AddFilmsFunction: React.FC<Props> = (props) => {
  const [films, setFilms] = useState('');

  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilms(e.target.value);
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onFormSubmit({name: films, id: Math.random().toString()});
    setFilms('');
  }
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input className="input-add" value={films} onChange={onchangeInput} type="text"/>
        <button className="btn-add" type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddFilmsFunction;