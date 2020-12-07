import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    notesSelector,
    notesLoadedSelector,
    notesLoadingSelector,
} from '../redux/reducer/selectors';
import { loadNotes } from '../redux/actions';
  
import Loader from '../loader';
import styles from './notestitle.module.css';

const NotesTitle = ({ loaded, loading, loadNotes, notes}) => {
    debugger;
    useEffect(() => {
        if (!loaded) loadNotes();
      }, []); //eslint-disable-line
    
      if (loading || !loaded) return <Loader />;

    return (
            notes.map(note => (
                <div className={styles.notes_names} key={note.title}>
                    <p>{note.title}</p>
                </div>

            ))
    );

}

const mapStateToProps = (state, ownProps) => {
    return {
        notes: notesSelector(state, ownProps),
        loaded: notesLoadedSelector(state),
        loading: notesLoadingSelector (state),
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
      loadNotes: () => dispatch(loadNotes()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NotesTitle);