import React from 'react';
import './Movie.scss';
const Movie = ({ movie }) => {
  return (
    <div className='Movie'>
      <img src={movie.image} alt={movie.title} />
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <span
          className={
            movie.rating > 7
              ? 'rating green'
              : movie.rating >= 5 && movie.rating <= 7
              ? 'rating orange'
              : 'rating red'
          }
        >
          {movie.rating}
        </span>
      </div>
      <div className='overview'>
        <h3>{movie.title}</h3>
        <h4>Overview:</h4>
        {cropWords(movie.overview, 550)}
      </div>
    </div>
  );
  function cropWords(str, length = 10) {
    return str.length <= length ? str : str.substring(0, length - 3) + '...';
  }
};
export default Movie;
