import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/reducer';
import { notesReducer } from '../redux/reducer/notesreducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const enchaser = () =>
  applyMiddleware(
    thunk,
  );

export default createStore(reducer, composeWithDevTools(enchaser()));
