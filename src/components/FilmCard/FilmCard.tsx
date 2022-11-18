import React, {Component} from 'react';
import {FilmsTape} from "../../types";
import "./FilmsCard.css"

interface Props {
  films: FilmsTape;
  onChange: (changeFilm: FilmsTape, value: string) => void;
  onClick: (film: FilmsTape) => void;
}

class FilmCard extends Component <Props> {

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.films.name !== nextProps.films.name;
  }

  render() {
    return (
      <div className="card">
        <input className="input-card"
               type="text"
               value={this.props.films.name}
               onChange={(e) => this.props.onChange(this.props.films, e.target.value)}
        />
        <button onClick={() => this.props.onClick(this.props.films)}
                className="btn-delete">Delete
        </button>
      </div>
    );
  }
}

export default FilmCard;