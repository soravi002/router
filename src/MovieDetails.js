import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const MovieDetails = ({ movies }) => {
  // Récupérer le titre du film depuis les paramètres de l'URL
  const { title } = useParams();
  // Trouver le film correspondant dans la liste complète
  const movie = movies.find((m) => m.title === title);

  // Afficher la page de détails du film
  if (!movie) {
    return <p>Le film n'a pas été trouvé.</p>;
  }

  return (
    <div className="movie-details">
      {/* Affichage des détails du film et de la bande-annonce */}
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Video autoPlay loop><source src={movie.trailer} type="video/webm" /></Video>
      <p>Note: {movie.rating}</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default MovieDetails;
