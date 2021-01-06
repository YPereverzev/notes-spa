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
  SEARCH_TEXT_FILTER,
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: [],
  trashed: [],
};

export default (state = initialState, action) => {
  const { type, notesResponse, error, payload, searchText, } = action;
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
        const activeNoteIdIndex = state.trashed.findIndex(item => item.id === payload.id);
        const newState = [...state.trashed];
        newState.splice(activeNoteIdIndex, 1);
        return {
          ...state,
          trashed: [...newState],
        };
      }

      case SEARCH_TEXT_FILTER: {
        console.log('redux: ', payload.searchText);
        let filtringNotes = state.entities;
        const searchText = payload.searchText;
        const filtredNotes = filterNotes({ filtringNotes, searchText });
        filtringNotes = state.trashed;
        const filtredTrashedNotes = filterNotes({ filtringNotes, searchText });
        return {
          ...state,
          entities: filtredNotes,
          trashed: filtredTrashedNotes,
        };
      }

    default:
      return state;
  }
};

const filterNotes = ({ filtringNotes, searchText }) => {
  const resultOfFiltration = filtringNotes.map((item) => {
    const toLowerCaseTitle = item.title.toLowerCase();
    const toLowerCaseText = item.text.toLowerCase();
    const toLowerCaseSearchText = searchText.toLowerCase();
    
    //если строка пустая - показывать все
    if ( !searchText === '' || toLowerCaseTitle.includes(toLowerCaseSearchText) || toLowerCaseText.includes(toLowerCaseSearchText)) {
      // флаг в true значит, что НЕ показывать 
      item.notOk = false
    } else {
      item.notOk = true 
    }
      return item
  });

  return resultOfFiltration;
}