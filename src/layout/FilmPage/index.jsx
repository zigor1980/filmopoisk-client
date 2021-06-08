import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Layout, Container, Header, Content, Sidebar,
} from '../../containers/Layout';
import filmsActions from '../../redux/films/actionCreators';
import Rate from '../../components/Rate';

import './styles.css';

export default function FilmPage() {
  const dispatch = useDispatch();
  const { filmId } = useParams();
  const film = useSelector((state) => state.films.data[filmId]);

  const onRate = useCallback((rate) => {
    dispatch(filmsActions.rateFilm(filmId, rate));
  }, [filmId]);

  useEffect(() => {
    if (filmId) {
      dispatch(filmsActions.getById(filmId));
    }
  }, [filmId]);

  return (
    <Layout>
      <Sidebar>Sidebar</Sidebar>
      <Container>
        <Header>Film page</Header>
        <Content>
          {film && (
          <div className="film-overview">
            <div className="film-overview__poster">
              <img src={film.poster} alt={film.title} />
            </div>
            <div className="film-overview__info">
              <p className="film-overview__title">{film.title}</p>
              <div className="film-overview__rate">
                <Rate rate={film.rating} onChange={onRate} />
              </div>
              <p className="filn-overview__description">
                {film.description}
              </p>
              Оценки пользователей
              <ul>
                {(film.Users || []).map((user) => (
                  <li key={user.id}>
                    <Link to={`/users/${user.id}`}>
                      {user.first_name}
                      {' '}
                      {user.last_name}
                    </Link>
                    <Rate rate={user.rate} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          )}
        </Content>
      </Container>
    </Layout>
  );
}
