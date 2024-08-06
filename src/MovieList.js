// src/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css'; // Make sure this path is correct

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card-link">
          <div className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <div className="movie-card-content">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
