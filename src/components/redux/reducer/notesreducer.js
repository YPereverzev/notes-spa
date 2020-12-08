// import produce from 'immer';
import { LOAD_NOTES, SUCCESS, REQUEST, FAILURE, SET_NEW_NOTE } from '../constants';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: [],
};

export default (state = initialState, action) => {
  const { type, notesResponse, error, payload } = action;
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

      case SET_NEW_NOTE: {
        const activeNoteIdIndex = state.entities.findIndex(item => item.id === payload.activeNoteId);
        state.entities[activeNoteIdIndex] = payload.newNoteInfo
        return {
          ...state,
          loading: false,
          loaded: true,
          error: null,
          entities: [...state.entities],
        };
      }

    default:
      return state;
  }
};
