import React, { Component } from "react";
import Movie from "./Movie.jsx";
import styled from "styled-components";
import Toggle from "../MovieToggle/Toggle";

class MovieList extends Component {
  state = {
    movies: []
  };
  async componentDidMount() {
    try {
      const movieRes = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=906aff26473dd959f27d65405298aec2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await movieRes.json();

      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="movie_section">
        <Toggle />
        <h4>
          Returns a list of movies from the Movie DB API. Click any of the
          individual movie links to view their details page.
        </h4>
        <MovieGrid>
          {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      </div>
    );
  }
}

export default MovieList;

//creating a styled component for practice
const MovieGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(7, 1fr);
`;
