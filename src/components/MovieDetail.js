// src/components/MovieDetail.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/MovieDetail.css';

const MovieDetail = () => {
  const { state } = useLocation();
  const { movieItem } = state || {};
  const navigate = useNavigate();

  if (!movieItem) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="movie-detail-content">
        <div className="movie-detail-image">
          <img src={movieItem.image} alt={movieItem.title} />
        </div>
        <div className="movie-detail-info">
          <h1>{movieItem.title}</h1>
          <p><strong>Genre:</strong> {movieItem.genre}</p>
          <p><strong>Year:</strong> {movieItem.year}</p>
          <p><strong>IMDB:</strong> {movieItem.imdb}</p>
          <p><strong>Duration:</strong> {movieItem.runtime}</p>
          <p>{movieItem.description}</p>
          <div className="movie-detail-buttons">
            <button>Rent $3.99</button>
            <button>Buy $14.99</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
