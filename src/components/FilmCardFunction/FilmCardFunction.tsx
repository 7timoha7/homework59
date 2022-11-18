import React from 'react';
import {FilmsTape} from "../../types";

interface Props {
  films: FilmsTape;
  onChange: (changeFilm: FilmsTape, value: string) => void;
  onClick: React.MouseEventHandler;
}

const FilmCardFunction: React.FC<Props> = (props) => {
  return (
    <div className="card">
      <input className="input-card"
             type="text"
             defaultValue={props.films.name}
             onChange={(e) => props.onChange(props.films, e.target.value)}
      />
      <button
        onClick={props.onClick}
        className="btn-delete">Delete
      </button>
    </div>
  );
};

const memo = (props: Props, nextProps: Props) => {
  return props.films === nextProps.films
}

export default React.memo(FilmCardFunction, memo);