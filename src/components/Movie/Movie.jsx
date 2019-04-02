import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const poster_path = "https://image.tmdb.org/t/p/w154";
const Movie = ({ movie }) => (
  <div>
    <Link to={`/${movie.id}`}>
      <Poster src={`${poster_path}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
);

export default Movie;

Movie.propType = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
