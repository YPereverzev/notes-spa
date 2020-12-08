import { 
    FAILURE, 
    SUCCESS, 
    REQUEST,
    LOAD_NOTES,
    notesAPI,
    SET_NEW_NOTE,
 } from '../redux/constants';

export const loadNotes = (state) => async (dispatch) => {
    dispatch({type: LOAD_NOTES + REQUEST})

  try {
    const notesResponse = await fetch(notesAPI).then(item => item.json());


    dispatch({type: LOAD_NOTES + SUCCESS, notesResponse });
  } catch (error) {
    dispatch({ type: LOAD_NOTES + FAILURE, error });
  }
};

export const setNewNote = (activeNoteId, newNoteInfo) => {
    return {
        type: SET_NEW_NOTE,
        payload: {
          activeNoteId: activeNoteId, 
          newNoteInfo: newNoteInfo
        }
    }
}