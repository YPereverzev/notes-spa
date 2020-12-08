import React from 'react';
import { connect } from 'react-redux';
import {
    entrySelector,
    idSelector,
    tmpIdSelector,
    notesLoadedSelector,
    notesLoadingSelector,
} from '../redux/reducer/selectors';
import Loader from '../loader';
import styles from './notestitle.module.css';



const NotesContent = ({ loaded, loading, activeNoteId, noteId, entry }) => {
    if (loading || !loaded) return <Loader />;
    
    if (activeNoteId === null) {
        return (
            <div>
                нет записей
            </div>
        )
    }
    // debugger;
    return (
        <div className={styles.note_area}>
            <div className={styles.notes_title}>
                <span>
                    {entry.title}
                </span>
            </div>
    
            <div>
                <p> 
                    {entry.text}
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        entry: tmpIdSelector(state, ownProps.activeNoteId),
        loaded: notesLoadedSelector(state),
        loading: notesLoadingSelector (state),
    };
  };
  
export default connect(mapStateToProps)(NotesContent);