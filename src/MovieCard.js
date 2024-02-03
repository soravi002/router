import React from 'react';
import { Link } from 'react-router-dom';
import './All.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* Lien vers la page de détails du film */}
      <Link to={`/movie/${movie.title}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
