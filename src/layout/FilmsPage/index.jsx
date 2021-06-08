import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Layout, Container, Header, Content, Footer, Sidebar,
} from '../../containers/Layout';
import filmsActions from '../../redux/films/actionCreators';
import filmsSelectors from '../../redux/films/selectors';
import FilmCard from '../../components/FilmCard';
import './styles.css';

export default function FilmsPage() {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelectors.getFilmsArray);

  useEffect(() => {
    dispatch(filmsActions.fetchFilms());
  }, []);

  return (
    <Layout>
      <Sidebar>Sidebar</Sidebar>
      <Container>
        <Header>Films</Header>
        <Content>
          <div className="films-list">
            {films.map((film) => <FilmCard key={film.id} film={film} />)}
          </div>
        </Content>
        <Footer />
      </Container>
    </Layout>
  );
}
