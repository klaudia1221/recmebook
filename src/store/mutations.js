export const SET_BOOKS = (state, books) => {
  state.books = books;
  state.book = null;
  state.book_genres = null;
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
  state.book_genres = null;
  
};
export const SET_EXCLUDED_BOOKS = (state, books) => {
  var items_list=[]
  for (var item of books) {
    items_list.push(item["book_id"]);

  }
  // }
  state.excluded_books_book_ids=items_list;
  
};

export const DELETE_ITEM_FROM_BOOKS_TO_BE_RATED = (state, book_id) => {
  let index = state.books_to_be_rated.findIndex(
    (book) => book.book_id == book_id
  );
  state.books_to_be_rated.splice(index, 1);
};
//   export const ADD_NEW_BOOK_TO_BE_RATED=(state, book)=>
//   {

//   }
//   export const SET_BOOK_TO_BE_RATED = (state, book_to_be_rated) => {
//     state.book_to_be_rated = book_to_be_rated;
//   };
//   export const SET_BOOK_TO_BE_RATED_GENRES = (state, book_to_be_rated_genres) => {
//     state.book_to_be_rated_genres = book_to_be_rated_genres;
//   };
export const SET_TOP_POPULAR_BOOKS = (state, top_popular_books) => {
  state.top_books = top_popular_books;
  state.book = null;
  state.book_genres = null;
};
export const SET_TOP_RATED_BOOKS = (state, top_rated_books) => {
  state.top_books = top_rated_books;
  state.book = null;
  state.book_genres = null;
};

export const SET_ALL_BOOKS_LENGTH = (state, all_books_length) => {
  state.all_books_length = all_books_length;
};
export const SET_PAGE_NUMBER = (state, page_number) => {
  state.page = page_number;
};
export const ADD_TO_TO_READ = (state, book_id) => {
  if (state.to_read.indexOf(book_id) === -1) {
    state.to_read.push(book_id);
    ADD_TO_EXCLUDED(state,book_id);
  }
  DELETE_ITEM_FROM_BOOKS_TO_BE_RATED(state, book_id);
};
export const ADD_TO_NOT_INTERESTED = (state, book_id) => {
  if (state.not_interested.indexOf(book_id) === -1) {
    state.not_interested.push(book_id);
    ADD_TO_EXCLUDED(state,book_id);
  }
  DELETE_ITEM_FROM_BOOKS_TO_BE_RATED(state, book_id);
};

export const ADD_RATING = (state, { book_id, value }) => {
  let bookRated = state.books_ratings.find((item) => {
    return item.book_id === book_id;
  });
  if (!bookRated) {
    state.books_ratings.push({ book_id: book_id, rating: value });
    DELETE_ITEM_FROM_BOOKS_TO_BE_RATED(state, book_id);
    ADD_TO_EXCLUDED(state,book_id);
  }
};
export const ADD_TO_EXCLUDED = (state, book_id) => {
  if (state.excluded_books_book_ids.indexOf(book_id) === -1) {
    state.excluded_books_book_ids.push(book_id);
  }
};

export const ADD_NEW_BOOK = (state, book) => {
  state.books_to_be_rated.push(book);
  ADD_TO_EXCLUDED(state,book.book_id);
};
export const MODIFY_ACCESS = (state,value) => {
    state.authenticated=value;
  };
  export const ADD_RECOMMENDATIONS = (state,items) => {
    state.recommended_items=items;
    state.excluded_books_book_ids=[];
    state.books_ratings=[];
    state.not_interested=[];
    state.to_read=[];
    state.user_ratings=[];


      }; 