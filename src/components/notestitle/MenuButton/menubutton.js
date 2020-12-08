import React, { useEffect } from 'react';
import styles from './menubutton.module.css';

const MenuButton = ({ id, setEditflag }) => {
    useEffect(() => {
        initMenuButton();
    }, []); //eslint-disable-line
    return (
        <div >
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
                    onClick={() => editNoteContent(id, setEditflag)}
                >
                    редактировать
                </button>   
                <button className={`${styles.menuButtonList_item} ${styles.add} influencebutton`}>
                    добавить
                </button>    
                <button className={`${styles.menuButtonList_item} ${styles.delete} influencebutton`}>
                    удалить
                </button>     
            </div>

        </div>
    );
};

export default MenuButton;

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

const editNoteContent = (id ,setEditflag) => {
    setEditflag(false) ;
}