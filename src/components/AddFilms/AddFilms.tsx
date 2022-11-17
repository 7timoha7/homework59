import React, {Component} from 'react';
import {FilmsTape} from "../../types";

interface Props {
  onFormSubmit: (newFilm: FilmsTape) => void;
}

class AddFilms extends Component<Props> {
  state: FilmsTape = {
    name: '',
    id: ''
  };

  onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({...prevState, name: e.target.value}));
  }

  onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onFormSubmit({name: this.state.name, id: Math.random().toString()})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input onChange={this.onchangeInput} type="text"/>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default AddFilms;