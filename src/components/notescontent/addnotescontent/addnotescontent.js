import React, { useState, useRef } from 'react';
import styles from './addnotescontent.module.css';
import { connect } from 'react-redux';
import { saveNewNote } from '../../redux/actions'
import { SHOW_NOTE } from '../../redux/constants';
import { v4 as uuidv4 } from 'uuid';

import {
    notesLoadedSelector,
    notesLoadingSelector,
} from '../../redux/reducer/selectors';
import Loader from '../../loader';

const AddNotesContent = ({ activeNoteId, setEditflag, loading, loaded, saveNewNote }) => {
    const [titleValue, setTitleValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const formEl = useRef(null);
    
    if (loading || !loaded) return <Loader />;
    
    return (
        <div className={styles.note_area}>

            <form 
                ref={formEl} 
                onSubmit={(event) => {
                    handleSubmit({event, saveNewNote, activeNoteId, setEditflag})
                }} 
                id='form'
                onChange={() => {}} 
            >
                <label>
                    <p>
                        Название новой заметки:
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
                    <input className={styles.applyBtn} type="submit" value="Сохранить" onChange={() => {}} />
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loaded: notesLoadedSelector(state),
        loading: notesLoadingSelector (state),
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        saveNewNote: (newNoteInfo) => dispatch(saveNewNote(newNoteInfo))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AddNotesContent);

const handleTitleChange = (setTitleValue) => {
    const newTitleValue = document.getElementById('newTitleValue');
    setTitleValue(newTitleValue.value);
}

const handleTextChange = (setTextValue) => {
    const newTextValue = document.getElementById('newTextValue');
    setTextValue(newTextValue.value);
}

const handleSubmit = ({event, saveNewNote, activeNoteId, setEditflag}) => {
    event.preventDefault();
        if (event.currentTarget[0].defaultValue.length === 0) {
        event.currentTarget[0].defaultValue = 'Untitled';
    }
    const newNoteInfo = {
        id: uuidv4(),
        title: event.currentTarget[0].defaultValue,
        text: event.currentTarget[1].defaultValue,
    }
    setEditflag(SHOW_NOTE);
    saveNewNote(newNoteInfo);
}