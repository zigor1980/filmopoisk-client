import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Layout, Container, Header, Content, Sidebar,
} from '../../containers/Layout';
import usersActions from '../../redux/users/actionCreators';
import FilmCard from '../../components/FilmCard';
import './styles.css';

export default function FilmPage() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.users.data[userId]);

  useEffect(() => {
    if (userId) {
      dispatch(usersActions.getById(userId));
    }
  }, [userId]);

  return (
    <Layout>
      <Sidebar>Sidebar</Sidebar>
      <Container>
        <Header>User Page</Header>
        <Content>
          {user && (
          <div className="user-dashboard">
            <div className="user-dashboard__poster">
              <img src={user.poster} alt={user.title} />
            </div>
            <div className="user-dashboard__info">
              <p className="user-dashboard__name">
                {user.first_name}
                {' '}
                {user.last_name}
              </p>
              <div className="user-dashboard__films-list">
                {(user.Films || []).map((film) => <FilmCard film={film} />)}
              </div>
            </div>
          </div>
          )}
        </Content>
      </Container>
    </Layout>
  );
}
