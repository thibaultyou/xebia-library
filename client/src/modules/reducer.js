import Types from './types';
import _ from 'lodash';

const defaultState = {
  basket: [],
};

const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.ADD_BOOK: {
      let book = action.payload;
      let newState = _.cloneDeep(state);
      newState.basket.push(book);
      return newState;
    }

    case Types.DELETE_BOOK: {
      let newState = _.cloneDeep(state);
      let book = action.payload;
      let index = _.findIndex(newState.basket, book);
      if (index !== -1) newState.basket.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default bookReducer;
