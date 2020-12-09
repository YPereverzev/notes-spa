import React from 'react';
import { connect } from 'react-redux';
import {
    trashedNotesSelector,
} from '../redux/reducer/selectors';
  
import NoteTitleRow from './notetitlerow';




const TrashedNotes = ({ trashedNotesSelector, loaded, loading, loadNotes, notes, setActiveNote, activeNote, setEditflag}) => {
    
      if (trashedNotesSelector.length === 0) return <div>В огороде пусто, выросла капуста</div>;
      
    return (
        trashedNotesSelector.map(note => {
            let activestyle = false;
            if (activeNote === note.id ) {
            activestyle = true
            }
            return (
            <NoteTitleRow activestyle={activestyle} note={note} setEditflag={setEditflag} id={note.id}/>
            )
        })
    );

}

const mapStateToProps = (state, ownProps) => {
    return {
        trashedNotesSelector: trashedNotesSelector (state),
    };
  };
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//       loadNotes: () => dispatch(loadNotes()),
//     };
//   };
  
  export default connect(mapStateToProps)(TrashedNotes);


function initNotesTitle (setActiveNote) {
  const elNotesTitle = document.getElementById('NotesTitle');
  elNotesTitle.addEventListener('click', (event) => { 
    setActiveNote(event.target.closest('.NoteTitleRow').id);
  })
  

  }