import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import genresAction from './redux/genres/actionCreators';
import Rate from './components/Rate';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(genresAction.fetchgenres());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Rate rate={4} />
    </div>
  );
}

export default App;
