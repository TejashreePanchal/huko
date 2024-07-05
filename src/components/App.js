import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Footer from './Footer';
import FeaturedMovie from './FeaturedMovie';
import MovieDetail from './MovieDetail';
import FeaturedSeries from './FeaturedSeries';
import SeriesDetail from './SeriesDetail';
import Home from './Home';
import '../css/HeaderFooter.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
    
    fetch('http://localhost:5000/series')
      .then(response => response.json())
      .then(data => setSeries(data));
  }, []);

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home movies={movies} series={series} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies" element={<FeaturedMovie movies={movies} showAll={true} />} />
          <Route path="/series" element={<FeaturedSeries series={series} showAll={true} />} />
          <Route path="/series/:id" element={<SeriesDetail />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;