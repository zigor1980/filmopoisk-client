import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    const accessToken = localStorage.getItem('accessToken');

    if (!newConfig.headers.authorization && accessToken) {
      newConfig.headers.Authorization = accessToken;
    }

    return newConfig;
  },
  (error) => Promise.reject(error),
);

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (!error.response) {
//       return Promise.reject(error);
//     }

//     if (get(error, 'response.status', null) === 401) {
//       store.dispatch(logout());
//     }

//     return Promise.reject(error);
//   },
// );

const API = {
  checkAuth: () => apiClient.get('/auth/check'),
  login: (email, password) => apiClient.post('/auth/login', { email, password }),
  signUp: (data) => apiClient.post('/auth/sign-up', data),
  fetchGenres: () => apiClient.get('/genres'),
  fetchFilms: () => apiClient.get('/films'),
  rateFilm: (userId, filmId, rate) => apiClient.post('/films/rate', { film_id: filmId, user_id: userId, rate }),
  getFilmById: (filmId) => apiClient.get(`/films/${filmId}`),
  getUserById: (userId) => apiClient.get(`/users/${userId}`),
};

export default API;
