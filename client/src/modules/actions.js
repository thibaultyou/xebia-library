import Types from './types';

const addBook = book => ({
  type: Types.ADD_BOOK,
  payload: book,
});

const deleteBook = book => ({
  type: Types.DELETE_BOOK,
  payload: book,
});

export default {
  addBook,
  deleteBook,
};
