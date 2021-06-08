import React from 'react';
import './styles.css';

export default function FilmCard({ film }) {
  const { title, rating } = film;
  return (
    <div className="film-card">
      {title}
      {rating}
    </div>
  );
}
