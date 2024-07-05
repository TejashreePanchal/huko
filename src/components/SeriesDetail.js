// src/components/SeriesDetail.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/MovieDetail.css';

const SeriesDetail = () => {
  const { state } = useLocation();
  const { seriesItem } = state || {};
  const navigate = useNavigate();

  if (!seriesItem) {
    return <div>Series not found</div>;
  }

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="movie-detail-content">
        <div className="movie-detail-image">
          <img src={seriesItem.image} alt={seriesItem.title} />
        </div>
        <div className="movie-detail-info">
          <h1>{seriesItem.title}</h1>
          <p><strong>Genre:</strong> {seriesItem.genre}</p>
          <p><strong>Year:</strong> {seriesItem.year}</p>
          <p><strong>IMDB:</strong> {seriesItem.imdb}</p>
          <p><strong>Seasons:</strong> {seriesItem.seasons}</p>
          <p>{seriesItem.description}</p>
          <div className="movie-detail-buttons">
            <button>Rent $3.99</button>
            <button>Buy $14.99</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
