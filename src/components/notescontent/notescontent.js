import React from 'react';
import {
    entrySelector,
} from '../../redux/reducer/selectors';
import Loader from '../loader';
import styles from './notestitle.module.css';



const NotesContent = ({noteId, entry, loaded}) => {
    debugger;
    return (
        <div className={styles.note_area}>
            <div className={styles.notes_title}>
                <p>
                    {entry.title}
                </p>
            </div>
    
            <div>
                <p> 
                    {entry.text}
                </p>
            </div>
        </div>
    );
};

export default notescontent;

const mapStateToProps = (state, ownProps) => {
    return {
        notes: entrySelector(state, ownProps.noteId),
        
    };
  };
  
export default connect(mapStateToProps)(NotesContent);