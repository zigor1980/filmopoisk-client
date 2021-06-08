function getFilmsArray(state) {
  const { order, data } = state.films;

  return order.map((filmId) => data[filmId]);
}

export default {
  getFilmsArray,
};
