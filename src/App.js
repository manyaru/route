// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import movies from './data'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
