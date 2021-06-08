import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Rate from '../Rate';
import './styles.css';

export default function FilmCard({ film, isTop }) {
  const {
    title, poster, id, rating,
  } = film;

  return (
    <div className={cn('film-card', {
      'film-card--top': isTop,
    })}
    >
      <div className="film-card__poster">
        <img src={poster} alt={title} />
      </div>
      <p className="film-card__title">
        <Link className="film-card__title--link" to={`/films/${id}`}>{title}</Link>
      </p>
      <div className="film-card__rate">
        <Rate rate={rating} />
      </div>
    </div>
  );
}
