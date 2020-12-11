import React, { useEffect } from 'react';
import styles from './menubutton.module.css';
import { connect } from 'react-redux';
import {
    EDIT_NOTE,
    ADD_NOTE,
    SHOW_NOTE,
} from '../../redux/constants';
import { deleteNote } from '../../redux/actions';
import {
    notesLoadedSelector,
} from '../../redux/reducer/selectors';



const MenuButton = ({ id, setEditflag, deleteNote, loaded }) => {
    useEffect(() => {
        initMenuButton();
    }, []); //eslint-disable-line
    return (
        <div className={styles.outer_wrapper_MenuButton}>
            <button id='MenuButton' 
            className={`${styles.menuButton} 
            `}> 
                . . . 
            </button>
            <div 
            id='menuButtonList_wrapper'
            className={`${styles.menuButtonList_wrapper}
                ${'displayNone'}
            `}>
                <button className={`${styles.menuButtonList_item} ${styles.edit} influencebutton`}
                    onClick={() => editNoteContentHandler(id, setEditflag)}
                >
                    редактировать
                </button>   
                <button className={`${styles.menuButtonList_item} ${styles.add} influencebutton`}
                    onClick={() => addNoteContentHandler(id, setEditflag)}
                >
                    добавить
                </button>    
                <button className={`${styles.menuButtonList_item} ${styles.delete} influencebutton`}
                 onClick={() => deleteNoteContentHandler(id, setEditflag, deleteNote)}
                >
                    удалить
                </button>     
            </div>

        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (id) => dispatch(deleteNote(id))
    }
}

const mapStateToProps = (state) => {
    return {
        loaded: notesLoadedSelector(state),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (MenuButton);

const initMenuButton = () => {
    const MenuButton = document.getElementById('MenuButton');
    const menuButtonList_wrapper = document.getElementById('menuButtonList_wrapper');
    MenuButton.addEventListener('click', (event) => {
        MenuButton.classList.toggle('displayNone');
        menuButtonList_wrapper.classList.toggle('displayNone');
    })

    const ROOT = document.getElementById('root');
    ROOT.addEventListener('click', (event) => {
        if (!event.target.closest('#MenuButton') ) {
            MenuButton.classList.remove('displayNone');
            menuButtonList_wrapper.classList.add('displayNone');
        }
    })
}

const editNoteContentHandler = (id ,setEditflag) => {
    setEditflag(EDIT_NOTE) ;
}

const addNoteContentHandler = (id, setEditflag) => {
    setEditflag(ADD_NOTE) ;
}

const deleteNoteContentHandler = (id, setEditflag, deleteNote) => {
    setEditflag(SHOW_NOTE);
    deleteNote(id);

}