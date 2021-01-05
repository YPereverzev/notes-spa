import { 
    FAILURE, 
    SUCCESS, 
    REQUEST,
    LOAD_NOTES,
    notesAPI,
    SET_NEW_NOTE,
    SAVE_NEW_NOTE,
    DELETE_NOTE,
    FINAL_DELETE_NOTE,
    RESTORE_NOTE
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


export const saveNewNote = (newNoteInfo) => {
  return {
      type: SAVE_NEW_NOTE,
      payload: {
        newNoteInfo: newNoteInfo
      }
  }
}

export const deleteNote = (id) => {
  return {
      type: DELETE_NOTE,
      payload: {
        id: id
      }
  }
}

export const restoreNote = (WTF) => {
  debugger;
  return {
    type: RESTORE_NOTE,
    payload: {
      id: WTF
    }
  }
}

export const finalDeleteNote = id => ({
  type: FINAL_DELETE_NOTE,
  payload: {id}
})