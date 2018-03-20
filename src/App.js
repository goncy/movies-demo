// @flow

import type {Movie} from "./definitions/movie.d";

import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {loadMovies} from "./store/actions/movies";

import Poster from "./components/Poster";

type Props = {
  movies: Array<Movie>,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .movies {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 16px;
  }

  .load {
    background-color: white;
    padding: 16px;
    color: rebeccapurple;
    font-size: 16px;
    height: 64px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;

class App extends Component {
  props: Props;

  render() {
    const {movies, loadApp} = this.props;

    return (
      <Container>
        {movies.length === 0 && (
          <button className="load" onClick={loadApp}>
            Cargar peliculas
          </button>
        )}

        {movies.length > 0 && (
          <div className="movies">
            {movies.map(movie => (
              <Poster
                key={movie.id}
                image={movie.medium_cover_image}
                title={movie.title}
              />
            ))}
          </div>
        )}
      </Container>
    );
  }
}

const enhancer = connect(({movies}) => ({movies: movies.list}), {
  loadApp: loadMovies,
});

export default enhancer(App);
