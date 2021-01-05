// import produce from 'immer';
import { 
  LOAD_NOTES,
  SUCCESS,
  REQUEST, 
  FAILURE, 
  SET_NEW_NOTE,
  SAVE_NEW_NOTE,
  DELETE_NOTE,
  FINAL_DELETE_NOTE,
  RESTORE_NOTE,
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: [],
  trashed: [],
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

      case SAVE_NEW_NOTE: 
        return {
          ...state,
          loading: false,
          loaded: true,
          error: null,
          entities: [...state.entities, payload.newNoteInfo],
        };
      
      case DELETE_NOTE: {
        const activeNoteIdIndex = state.entities.findIndex(item => item.id === payload.id);
        const newState = [...state.entities];
        const deltedNote = newState.splice(activeNoteIdIndex, 1);
        return {
          ...state,
          loading: false,
          loaded: true,
          error: null,
          entities: [...newState],
          trashed: [...state.trashed, ...deltedNote]
        };
      }

      case RESTORE_NOTE: {
        debugger;
        const activeNoteIdIndex = state.trashed.findIndex(item => item.id === payload.id);
        const newState = [...state.trashed];
        const restoredNote = newState.splice(activeNoteIdIndex, 1);
        return {
          ...state,
          loading: false,
          loaded: true,
          error: null,
          entities: [...state.entities, ...restoredNote],
          trashed: [...newState],
        };

      }
      
      case FINAL_DELETE_NOTE: {
        debugger;
        const activeNoteIdIndex = state.trashed.findIndex(item => item.id === payload.id);
        const newState = [...state.trashed];
        newState.splice(activeNoteIdIndex, 1);
        return {
          ...state,
          trashed: [...newState],
        };

      }

    default:
      return state;
  }
};
