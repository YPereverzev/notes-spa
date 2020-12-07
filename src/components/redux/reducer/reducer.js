import { combineReducers } from 'redux';
import notesReducer from './notesreducer';

export default combineReducers({
  notes: notesReducer,
});
