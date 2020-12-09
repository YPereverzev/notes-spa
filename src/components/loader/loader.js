import React from 'react';
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className={styles.note_area}>
        <div className={styles.notes_title}>
            LOADING...
        </div>
    </div>
  )
};

export default Loader;
