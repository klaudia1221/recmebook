import axios from "axios";

export const getBooks = ({ commit }) => {
  axios
    .get("http://127.0.0.1:5000/books", { params: { page: 1, limit: 36 } })
    .then((res) => {
      commit("SET_BOOKS", res.data[0][0]);
    });
};
export const getBook = ({ commit }, bookId) => {
  axios
    .get("http://127.0.0.1:5000/bookdetails", { params: { book_id: bookId }})
    .then((res) => {
      commit("SET_BOOK", res.data[0][0][0]);
    });
};
export const getBookGenres = ({ commit }, bookId) => {
    axios
      .get("http://127.0.0.1:5000/bookgenres", { params: { book_id: bookId }})
      .then((res) => {
        commit("SET_BOOK_GENRES", res.data);
      });
  };
