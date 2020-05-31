import axios from "axios";
// import state from "./state";

export const getBooks = ({ commit }) => {
  axios
    .get("http://127.0.0.1:5000/books", { params: { page: 1, limit: 36 } })
    .then((res) => {
      commit("SET_BOOKS", res.data[0][0]);
    });
};
export const getBooksFromPage = ({ commit }, pageNumber) => {
  axios
    .get("http://127.0.0.1:5000/books", {
      params: { page: pageNumber, limit: 36 },
    })
    .then((res) => {
      commit("SET_BOOKS", res.data[0][0]);
    });
};
export const getBook = ({ commit }, bookId) => {
  axios
    .get("http://127.0.0.1:5000/bookdetails", { params: { book_id: bookId } })
    .then((res) => {
      commit("SET_BOOK", res.data[0][0][0]);
    });
};
export const getBookGenres = ({ commit }, bookId) => {
  axios
    .get("http://127.0.0.1:5000/bookgenres", { params: { book_id: bookId } })
    .then((res) => {
      commit("SET_BOOK_GENRES", res.data);
    });
};
export const getBooksToBeRated = ({ commit }) => {
  axios.get("http://127.0.0.1:5000/coldbooks").then((res) => {
    commit("SET_BOOKS_TO_BE_RATED", res.data[0][0]);
    commit("SET_EXCLUDED_BOOKS",res.data[0][0]);
  });
};
export const getAllBooksLength = ({ commit }) => {
  axios.get("http://127.0.0.1:5000/bookscount").then((res) => {
    commit("SET_ALL_BOOKS_LENGTH", res.data[0][0]);
  });
};
export const addNewBookToBeRated = ({ commit, state }) => {
  var qs = require("qs");

  axios
    .get("http://127.0.0.1:5000/replacebook", {
      params: { excluded_books: state.excluded_books_book_ids },
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    })
    .then((res) => {
      commit("ADD_NEW_BOOK", res.data[0][0][0]);
    });
};
export const getRecommendations = ({ commit, state }) => {
  axios
    .get("http://127.0.0.1:5000/getrecommendations", {
      params: {
        ratings: JSON.stringify(state.books_ratings),
        not_interested: JSON.stringify(state.not_interested),
        to_read: JSON.stringify(state.to_read),
      },
    })
    .then((res) => {
      commit("ADD_RECOMMENDATIONS", res.data[0][0]);
    });
};
//   export const getTopPopularBooks = ({ commit }) => {
//     axios
//       .get("http://127.0.0.1:5000/toppopular")
//       .then((res) => {
//         commit("SET_TOP_POPULAR_BOOKS", res.data[0][0]);
//       });
//   };
//   export const getTopRatedBooks = ({ commit }) => {
//     axios
//       .get("http://127.0.0.1:5000/toprated")
//       .then((res) => {
//         commit("SET_TOP_RATED_BOOKS", res.data[0][0]);
//       });
//   };
//   export const getBookToBeRated  = ({ commit }, bookId) => {
//     axios
//       .get("http://127.0.0.1:5000/bookdetails", { params: { book_id: bookId }})
//       .then((res) => {
//         commit("SET_BOOK_TO_BE_RATED", res.data[0][0][0]);
//       });
//   };
//   export const getBookToBeRatedGenres = ({ commit }, bookId) => {
//     axios
//       .get("http://127.0.0.1:5000/bookgenres", { params: { book_id: bookId }})
//       .then((res) => {
//         commit("SET_BOOK_TO_BE_RATED_GENRES", res.data);
//       });
//   };
