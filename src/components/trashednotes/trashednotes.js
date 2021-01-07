import React from 'react';
import { connect } from 'react-redux';
import {
    trashedNotesSelector,
} from '../redux/reducer/selectors';

import styles from './trashednotes.module.css'
  
import NoteTitleRow from '../notestitle/notetitlerow';
import { useEffect } from 'react';

const TrashedNotes = ({ trashedNotes, activeNote, setActiveNote, setEditflag}) => {
  useEffect(() => {
      initNotesTitle(setActiveNote);
    }, []); //eslint-disable-line

  if (trashedNotes.length === 0) return <div></div>;
    
  return (
      trashedNotes.map(note => {
          let activestyle = false;
          if (activeNote === note.id ) {
            activestyle = true
          }
          return (
            !note.notOk && <NoteTitleRow activestyle={activestyle} note={note} setEditflag={setEditflag} id={note.id} key={note.id} isTrashedMenuButton={true} setActiveNote={setActiveNote}/>
          )
      })
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
        trashedNotes: trashedNotesSelector (state),
    };
  };
  
export default connect(mapStateToProps)(TrashedNotes);


function initNotesTitle (setActiveNote) {
  const elNotesTitle = document.getElementById('trashedNotesTitle');
  elNotesTitle.addEventListener('click', (event) => { 
    const buff = event.target.closest('.NoteTitleRow').id;
    setActiveNote(buff);
  })
}