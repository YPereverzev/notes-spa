import React from 'react';
import { connect } from 'react-redux';
import {
    tmpIdSelector,
    notesLoadedSelector,
    notesLoadingSelector,
    loadFirstNoteSelector,
} from '../redux/reducer/selectors';
import Loader from '../loader';
import styles from './notestitle.module.css';



const NotesContent = ({ loaded, loading, activeNoteId, entry, loadFirstNoteSelector, setActiveNote, tmpIdSelector }) => {
    if (loading || !loaded) return <Loader />;
    
    if (!tmpIdSelector) {
        return (
            <div className={styles.note_area}>
                <div className={styles.notes_title}>
                    Записей нет
                </div>
            </div>
    )}

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
        loadFirstNoteSelector: loadFirstNoteSelector(state),
        tmpIdSelector: tmpIdSelector(state, ownProps.activeNoteId),
    };
  };
  
export default connect(mapStateToProps)(NotesContent);