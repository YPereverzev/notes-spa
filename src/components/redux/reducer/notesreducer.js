// import produce from 'immer';
import { LOAD_NOTES, SUCCESS, REQUEST, FAILURE } from '../constants';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, notesResponse, error } = action;
  switch (type) {
    case LOAD_NOTES + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };

    case LOAD_NOTES + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };

    case LOAD_NOTES + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: [...notesResponse],
      };

    default:
      return state;
  }
};
