import React, {Component} from 'react';
import AddFilms from "../../components/AddFilms/AddFilms";
import {FilmsTape} from "../../types";
import FilmCard from "../../components/FilmCard/FilmCard";
import "./AppFilms.css"

interface State {
  films: FilmsTape[]
}

class AppFilms extends Component <{}, State> {
  state: State = {
    films: []
  };

  addFilm = (newFilm: FilmsTape) => {
    this.setState({films: [...this.state.films, newFilm]})
  }

  onChangeCardFilm = (changeFilm: FilmsTape, value: string) => {
    const copyFilms = [...this.state.films];
    const index = this.state.films.findIndex(film => film.id === changeFilm.id);
    const copyFilm = {...this.state.films[index]};
    copyFilm.name = value;
    copyFilms[index] = copyFilm;
    this.setState({films: copyFilms});
  }

  btnDelete = (filmDelete: FilmsTape) => {
    const copyFilms = [...this.state.films];
    const index = this.state.films.findIndex(film => film.id === filmDelete.id);
    copyFilms.splice(index, 1);
    this.setState({films: copyFilms});
  }

  render() {
    return (
      <div className="AppFilms">
        <AddFilms onFormSubmit={this.addFilm}/>
        <div className="films-cards">
          <h1>To watch list:</h1>
          {this.state.films.map((film) => {
            return <FilmCard onClick={this.btnDelete}
                             films={film}
                             key={film.id}
                             onChange={this.onChangeCardFilm}/>
          })}
        </div>

      </div>
    );
  }
}

export default AppFilms;