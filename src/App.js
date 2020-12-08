import { useState, useEffect } from 'react';
import './App.css';
import NotesTitle from './components/notestitle';
import NotesContent from './components/notescontent';
import NotesContentEdit from './components/notescontent/notescontentedit';
 
import {fixture} from './fixture';
import globalStyles from '../src/style/globalstyles.module.css';



function App() {
  const [ activeNote, setActiveNote] = useState(null);
  const [ editflag, setEditflag] = useState(true);

  return (
    <div className={globalStyles.wrapper}>
    <aside>
      <div className={globalStyles.add_wrapper}>
        <div className={globalStyles.notes_name_wrapper}>
          <div id="NotesTitle">
            <NotesTitle setActiveNote={setActiveNote} activeNote={activeNote} setEditflag={setEditflag}/>

          </div>
        </div>

      </div>
    </aside>
    <main className={globalStyles.main}>
        <div>
          {
            editflag ? <NotesContent activeNoteId={activeNote} setEditflag={setEditflag}/> : <NotesContentEdit activeNoteId={activeNote} setEditflag={setEditflag}/>
          }
           

        </div>
    </main>
  </div>
  );
}

export default App;


