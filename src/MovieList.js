import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  // Fonction pour diviser les films en rangées de 3
  const chunkedMovies = [];
  for (let i = 0; i < movies.length; i += 3) {
    chunkedMovies.push(movies.slice(i, i + 3));
  }

  return (
    <div className="movie-list">
      {/* Affichage des films en rangées de 3 */}
      {chunkedMovies.map((row, rowIndex) => (
        <div key={rowIndex} className="movie-row">
          {row.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
