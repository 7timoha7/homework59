import React, {Component} from 'react';
import {FilmsTape} from "../../types";
import "./AddFilms.css"

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
    this.setState(prevState => ({...prevState, name: ''}));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="input-add"
            value={this.state.name}
            onChange={this.onchangeInput}
            type="text"/>
          <button
            className="btn-add"
            type="submit"
          >ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddFilms;