import React, {Component} from 'react';
import {FilmsTape} from "../../types";

interface Props {
  films: FilmsTape;
  onChange: (changeFilm: FilmsTape, value: string) => void;
}

class FilmCard extends Component <Props> {

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.films.name !== nextProps.films.name;
  }

  componentDidMount() {
    console.log("[BlogC] DidMount");
  }

  componentDidUpdate() {
    console.log("[BlogC] DidUpdate");
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.films.name}
               onChange={(e) => this.props.onChange(this.props.films, e.target.value)}/>
        <button>Delete</button>
      </div>
    );
  }
}

export default FilmCard;