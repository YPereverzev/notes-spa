import React from 'react';
import globalStyles from '../../../style/globalstyles.module.css';
import styles from './notetitlerow.module.css';
import MenuButton from '../MenuButton'

const NoteTitleRow = ({ note, activestyle, setEditflag}) => {
    
    return (
        <div 
            className={`${styles.notes_names} ${activestyle && styles.active} NoteTitleRow` } 
            key={note.id}
            id={note.id}
        >
          <span>{note.title}</span>
          <div className={styles.menuButton_wrapper}>
            {activestyle && <MenuButton id={note.id} setEditflag={setEditflag}/>}
          </div>
      </div>
    );

};

export default NoteTitleRow;