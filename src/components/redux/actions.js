import { 
    FAILURE, 
    SUCCESS, 
    REQUEST,
    LOAD_NOTES,
    notesAPI,
 } from '../redux/constants';

export const loadNotes = (state) => async (dispatch) => {
    console.log('thunk');
    dispatch({type: LOAD_NOTES + REQUEST})

  try {
    const notesResponse = await fetch(notesAPI).then(item => item.json());


    dispatch({type: LOAD_NOTES + SUCCESS, notesResponse });
  } catch (error) {
    dispatch({ type: LOAD_NOTES + FAILURE, error });
  }
};

export const chousenNote = () => {
    return {
        type: 'chousen_note',
        payload: notesAPI, 
    }
}