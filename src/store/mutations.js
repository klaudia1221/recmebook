export const SET_BOOKS = (state, books) => {
  state.books = books;
  state.book = null;
  state.book_genres=null;
};
export const SET_BOOK = (state, book) => {
    state.book = book;
  };
  export const SET_BOOK_GENRES = (state, book_genres) => {
    state.book_genres = book_genres;
  };