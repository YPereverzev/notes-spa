import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    notesSelector,
    notesLoadedSelector,
    notesLoadingSelector,
} from '../redux/reducer/selectors';
import { loadNotes } from '../redux/actions';
  
import Loader from '../loader';
import NoteTitleRow from './notetitlerow';




const NotesTitle = ({ loaded, loading, loadNotes, notes, setActiveNote, activeNote, setEditflag}) => {
    useEffect(() => {
        if (!loaded) {
          loadNotes();
          initNotesTitle(setActiveNote);
          setActiveNote('01');
        }
        setActiveNote('01');
      }, []); //eslint-disable-line
    
      if (loading || !loaded) return <Loader />;
      
    return (
            notes.map(note => {
              let activestyle = false;
              if (activeNote === note.id ) {
                activestyle = true
              }
              return (
                <NoteTitleRow activestyle={activestyle} note={note} setEditflag={setEditflag} id={note.id} key={note.id}/>
              )
            })
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
    return {
      loadNotes: () => dispatch(loadNotes()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NotesTitle);


function initNotesTitle (setActiveNote) {
  const elNotesTitle = document.getElementById('NotesTitle');
  elNotesTitle.addEventListener('click', (event) => { 
    setActiveNote(event.target.closest('.NoteTitleRow').id);
  })
  

  }