import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header({ children }) {
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <div className="header">
      <div className="header__content">
        {children}
      </div>
      {currentUser && (
      <Link className="header__profile-link" to={`/users/${currentUser.id}`}>
        {currentUser.first_name}
        {' '}
        {currentUser.last_name}
      </Link>
      )}
    </div>
  );
}
