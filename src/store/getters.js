// export const getBooks = (state) => {
//   return state.books;
// };
export const getAuthenticationStatus = (state) => {
    return state.authenticated;
  };
  export const getToRead = (state) => {
    return state.to_read;
  };
  export const getNotInterested = (state) => {
    return state.not_interested;
  };
  export const getBooksRatings= (state) => {
    return state.books_ratings;
  };
  export const getRecommendedItems= (state) => {
    return state.recommended_items;
  };
  export const getBooksToBeRated= (state) => {
    return state.books_to_be_rated;
  };

  export const getExcludedBooks= (state) => {
    return state.excluded_books_book_ids;
  };
