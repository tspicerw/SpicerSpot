import React, { Component } from "react";
import { Poster } from "./Movie";
import styled from "styled-components";

const poster_path = "https://image.tmdb.org/t/p/w154/";
const backdrop_path = "https://image.tmdb.org/t/p/original/";

class MovieDetail extends Component {
  state = {
    movie: {}
  };
  async componentDidMount() {
    try {
      const movieRes = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}
       ?api_key=906aff26473dd959f27d65405298aec2&language=en-US`
      );
      const movie = await movieRes.json();

      this.setState({
        movie: movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${backdrop_path}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster
            src={`${poster_path}${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h4>{this.state.movie.title}</h4>
            <p className="release_date">Release date: {movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-size: cover;

  background: url(${props => props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div`
  position: relative;
  text-alight: left;
  padding: 2rem 10%;
  display: flex;
  font-size: 20px;
  top: 600px;

  > div {
    background-color: white;
    margin-left: 20px;
    color: black;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
