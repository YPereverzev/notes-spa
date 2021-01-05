import React, { useState, useRef } from 'react';
import styles from './notescontentedit.module.css';
import { connect } from 'react-redux';
import { setNewNote } from '../../redux/actions'
import { SHOW_NOTE } from '../../redux/constants'

import {
    tmpIdSelector,
    notesLoadedSelector,
    notesLoadingSelector,
} from '../../redux/reducer/selectors';




const NotesContentEdit = ({ activeNoteId, setEditflag, entry, setNewNote }) => {
    const [titleValue, setTitleValue] = useState(entry.title);
    const [textValue, setTextValue] = useState(entry.text);

    const formEl = useRef(null);
    return (
        <div className={styles.note_area}>

            <form 
                ref={formEl} 
                onSubmit={(event) => handleSubmit(event, setNewNote, activeNoteId, setEditflag)} 
                id='form'
                onChange={() => {}} 
            >
                <label>
                    <p>
                        Название заметки:
                    </p> 
                    <input className={styles.newTitleValue} type="text" value={titleValue} onChange={() => handleTitleChange(setTitleValue)} id='newTitleValue' />
                </label>
                <label>
                    <p>
                        Заметка:
                    </p> 
                    <textarea className={styles.newTextValue} type="text" value={textValue} onChange={() => handleTextChange(setTextValue)} id='newTextValue' />
                </label>
                <br></br>
                <div className={styles.applyBtn_wrapper}>
                    <input className={styles.applyBtn} type="submit" value="Сохранить" />
                </div>
            </form>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setNewNote: (activeNoteId, newNoteInfo) => dispatch(setNewNote(activeNoteId, newNoteInfo))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NotesContentEdit);

const handleTitleChange = (setTitleValue) => {
    const newTitleValue = document.getElementById('newTitleValue');
    setTitleValue(newTitleValue.value);
}

const handleTextChange = (setTextValue) => {
    const newTextValue = document.getElementById('newTextValue');
    setTextValue(newTextValue.value);
}

const handleSubmit = (event, setNewNote, activeNoteId, setEditflag) => {
    event.preventDefault();
    const newNoteInfo = {
        id: activeNoteId,
        title: event.currentTarget[0].defaultValue,
        text: event.currentTarget[1].defaultValue,
    }

    setEditflag(SHOW_NOTE);
    setNewNote(activeNoteId, newNoteInfo);
}