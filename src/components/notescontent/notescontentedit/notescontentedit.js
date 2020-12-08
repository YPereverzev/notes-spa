import React, { useState, useRef } from 'react';
import styles from './notescontentedit.module.css';
import { connect } from 'react-redux';
import { setNewNote } from '../../redux/actions'


import {
    entrySelector,
    idSelector,
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
            <div className={styles.notes_title}>
                <span>
                    РЕДАКТИРОВАНИЕ ШАПКИ
                    {entry.title}
                </span>
            </div>
    
            <div>
                <p> 
                    РЕДАКТИРОВАНИЕ ТЕКСТА
                    {entry.text}
                </p>
            </div>

            <form ref={formEl} onSubmit={(event) => handleSubmit(event, setNewNote, activeNoteId)} id='form'>
                <label>
                Title:
                <input type="text" value={titleValue} onChange={() => handleTitleChange(setTitleValue)} id='newTitleValue' />

                Text:
                <input type="text" value={textValue} onChange={() => handleTextChange(setTextValue)} id='newTextValue' />
                </label>
                <input type="submit" value="Отправить" />
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


const handleSubmit = (event, setNewNote, activeNoteId) => {
    event.preventDefault();
    const newNoteInfo = {
        id: activeNoteId,
        title: event.currentTarget[0].defaultValue,
        text: event.currentTarget[1].defaultValue,
    }
    setNewNote(activeNoteId, newNoteInfo);
}