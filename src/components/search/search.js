import React from 'react';
import styles from './search.module.css';

const Search = () => {
    return (
        <div className={styles.wrapper} >
            <input className={styles.search} type="text" value={'Search everywere'} onClick={'(e) => e'} />
            
        </div>
    );
};

export default Search;