import React from 'react';
import globalStyles from '../../../style/globalstyles.module.css';
import styles from './notetitlerow.module.css';
import MenuButton from '../MenuButton';
import TrashedMenuButton from '../trashedMenuButton';

const NoteTitleRow = ({ note, activestyle, setEditflag, setActiveNote, isTrashedMenuButton}) => {
    return (
        <div 
            className={`${styles.notes_names} ${activestyle && styles.active} NoteTitleRow` } 
            key={note.id}
            id={note.id}
        >
          <span className={styles.note_title_content}>{fitToString(note.title)}</span>
          
          {!isTrashedMenuButton && (
          <div className={styles.menuButton_wrapper}>
            {activestyle && <MenuButton id={note.id} setEditflag={setEditflag} setActiveNote={setActiveNote}/>}
          </div>
          )}
          
          {isTrashedMenuButton && (
          <div className={styles.menuButton_wrapper}>
            {activestyle && <TrashedMenuButton id={note.id} setEditflag={setEditflag} setActiveNote={setActiveNote}/>}
          </div>
          )}
      </div>
    );

};

export default NoteTitleRow;

function fitToString(title) {
  return (title.length < 32) ? title : title.substr(0, 30) + ' ...';

}