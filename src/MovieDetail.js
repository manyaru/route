// src/MovieDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetail.css'; // Make sure this path is correct

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-detail-content">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <div className="movie-trailer">
          <iframe
            width="560"
            height="315"
            src={movie.trailerURL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default MovieDetail;
