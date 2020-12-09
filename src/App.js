import { useState } from 'react';
import './App.css';
import NotesTitle from './components/notestitle';
import NotesContent from './components/notescontent';
import NotesContentEdit from './components/notescontent/notescontentedit';
import AddNotesContent from './components/notescontent/addnotescontent';

import Trashed from './components/notestitle/notetitlerow/trashed';
import TrashedNotes from './components/trashednotes';
import Search from './components/search';

import {
  SHOW_NOTE,
  EDIT_NOTE,
  ADD_NOTE,
} from './components/redux/constants';
import globalStyles from '../src/style/globalstyles.module.css';



function App() {
  const [ activeNote, setActiveNote] = useState('01');
  const [ editflag, setEditflag] = useState(SHOW_NOTE);

  return (
    <div className={globalStyles.wrapper}>
    <aside>
      <div className={globalStyles.add_wrapper}>
        <div className={globalStyles.notes_name_wrapper}>
          <div id="NotesTitle">
            <NotesTitle setActiveNote={setActiveNote} activeNote={activeNote} setEditflag={setEditflag}/>
          </div>
          <div>
            <Trashed />
          </div>
          <TrashedNotes />
          <Search />
        </div>
      </div>
    </aside>
    <main className={globalStyles.main}>
        <div>
          {<Choise editflag={editflag} activeNote={activeNote} setEditflag={setEditflag} setActiveNote={setActiveNote}/>}
        </div>
    </main>
  </div>
  );
}

export default App;

const Choise = ({editflag,  activeNote, setEditflag, setActiveNote }) => {
  switch (editflag) {
    case SHOW_NOTE:
      return <NotesContent activeNoteId={activeNote} setEditflag={setEditflag} setActiveNote={setActiveNote}/> 
    case EDIT_NOTE:
      return <NotesContentEdit activeNoteId={activeNote} setEditflag={setEditflag}/>
    case ADD_NOTE:
      return <AddNotesContent setEditflag={setEditflag}/> 
    default:
        return 'этого не должно было случиться' 
  }
}