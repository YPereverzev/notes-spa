import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    notesSelector,
    notesLoadedSelector,
    notesLoadingSelector,
    loadFirstNoteSelector,
} from '../redux/reducer/selectors';
import { loadNotes } from '../redux/actions';
  
import Loader from '../loader';
import NoteTitleRow from './notetitlerow';




const NotesTitle = ({ loaded, loading, loadNotes, notes, setActiveNote, activeNote, setEditflag, loadFirstNoteSelector}) => {
    useEffect(() => {
        if (!loaded) {
          loadNotes();
          initNotesTitle(setActiveNote);
          setActiveNote(loadFirstNoteSelector);
        }
        //what for next line...?
      }, []); //eslint-disable-line
    
    if (loading || !loaded) return <Loader />;
    if (!activeNote) setActiveNote(loadFirstNoteSelector)
      
    return (
      notes.map(note => {
        let activestyle = false;
        if (activeNote === note.id ) {
          activestyle = true
        }
        return (
          <NoteTitleRow activestyle={activestyle} note={note} setEditflag={setEditflag} id={note.id} key={note.id} setActiveNote={setActiveNote}/>
        )
      })
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        notes: notesSelector(state, ownProps),
        loaded: notesLoadedSelector(state),
        loading: notesLoadingSelector (state),
        loadFirstNoteSelector: loadFirstNoteSelector(state),
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
      loadNotes: () => dispatch(loadNotes()),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(NotesTitle);


function initNotesTitle (setActiveNote) {
  const elNotesTitle = document.getElementById('notesTitle');
  elNotesTitle.addEventListener('click', (event) => { 
    setActiveNote(event.target.closest('.NoteTitleRow').id);
  })
}