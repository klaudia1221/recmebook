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
  export const SET_BOOKS_TO_BE_RATED = (state, books_to_be_rated) => {
    state.books_to_be_rated = books_to_be_rated;
    state.book = null;
    state.book_genres=null;
  };
//   export const SET_BOOK_TO_BE_RATED = (state, book_to_be_rated) => {
//     state.book_to_be_rated = book_to_be_rated;
//   };
//   export const SET_BOOK_TO_BE_RATED_GENRES = (state, book_to_be_rated_genres) => {
//     state.book_to_be_rated_genres = book_to_be_rated_genres;
//   };
export const SET_TOP_POPULAR_BOOKS = (state, top_popular_books) => {
    state.top_books = top_popular_books;
    state.book = null;
    state.book_genres=null;
 
  };
  export const SET_TOP_RATED_BOOKS = (state, top_rated_books) => {
    state.top_books = top_rated_books;
    state.book = null;
    state.book_genres=null;
 
  };
  export const SET_ALL_BOOKS_LENGTH= (state, all_books_length) => {
    state.all_books_length =all_books_length;
  };
  export const SET_PAGE_NUMBER= (state, page_number) => {
    state.page=page_number;
  };