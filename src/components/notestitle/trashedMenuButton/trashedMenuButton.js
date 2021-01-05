import React, { useEffect } from 'react';
import styles from './trashedmenubutton.module.css';
import { connect } from 'react-redux';
import {
    SHOW_NOTE,
} from '../../redux/constants';
import { 
    restoreNote,
    finalDeleteNote,
} from '../../redux/actions';
import {
    notesLoadedSelector,
    loadFirstNoteSelector,
} from '../../redux/reducer/selectors';



const TrashedMenuButton = ({ id, setEditflag, finalDeleteNote, restoreNote, setActiveNote, loadFirstNoteSelector }) => {
    useEffect(() => {
        initMenuButton();
    }, []); //eslint-disable-line

    return (
        <div className={styles.outer_wrapper_trashMenuButton}>
            <button id='TrashedMenuButton' 
            className={`${styles.menuButton} 
            `}> 
                . . . 
            </button>
            <div 
            id='trashedMenuButtonList_wrapper'
            className={`${styles.trashedMenuButtonList_wrapper}
            ${'displayNone'}
        `}>
                <button className={`${styles.menuButtonList_item} ${styles.restore} influencebutton`}
                    onClick={() => restoreContentHandler({id, restoreNote, setEditflag, loadFirstNoteSelector, setActiveNote})}
                >
                    восстановить
                </button>   
               
                <button className={`${styles.menuButtonList_item} ${styles.final_delete} influencebutton`}
                 onClick={() => finalDeleteNoteContentHandler({ id, setEditflag, finalDeleteNote, loadFirstNoteSelector, setActiveNote })}
                >
                    удалить окончательно
                </button>     
            </div>

        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        // deleteNote: (id) => dispatch(deleteNote(id)),
        restoreNote: (WTF) => dispatch(restoreNote(WTF)),
        finalDeleteNote: (WTF) => dispatch(finalDeleteNote(WTF)),
    }
}

const mapStateToProps = (state) => {
    return {
        loadFirstNoteSelector: loadFirstNoteSelector(state),
        loaded: notesLoadedSelector(state),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TrashedMenuButton);

const initMenuButton = () => {
    const MenuButton = document.getElementById('TrashedMenuButton');
    const trashedMenuButtonList_wrapper = document.getElementById('trashedMenuButtonList_wrapper');
    MenuButton.addEventListener('click', (event) => {
            MenuButton.classList.toggle('displayNone');
            trashedMenuButtonList_wrapper.classList.toggle('displayNone');
    })

    const ROOT = document.getElementById('root');
    ROOT.addEventListener('click', (event) => {
        if (!event.target.closest('#TrashedMenuButton') ) {
            MenuButton.classList.remove('displayNone');
            trashedMenuButtonList_wrapper.classList.add('displayNone');
        }
    })
}

const restoreContentHandler = ({ id ,setEditflag, restoreNote, loadFirstNoteSelector, setActiveNote }) => {
    debugger;
    const WTF = id;
    restoreNote(WTF);
    setActiveNote(loadFirstNoteSelector);
    debugger;

    setEditflag(SHOW_NOTE);
    // 
    debugger;
}

const finalDeleteNoteContentHandler = ({ id, setEditflag, deleteNote, loadFirstNoteSelector, setActiveNote, finalDeleteNote }) => {
    debugger;
    setActiveNote(loadFirstNoteSelector);
    setEditflag(SHOW_NOTE);
    finalDeleteNote(id);

}