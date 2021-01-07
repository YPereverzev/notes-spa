import React, { useState } from 'react';
import styles from './search.module.css';
import { searchFilter } from '../redux/actions'
import { connect } from 'react-redux'


const Search = ({ searchFilter }) => {
    const [searchText, setsearchText] = useState('');
    console.log(searchText);
    return (
        <div className={styles.wrapper} >
            <input 
                className={styles.search} 
                type="text" 
                placeholder={'Search everywere'} 
                onClick={'(e) => e'}
                onKeyUp ={(e) => searchHandler({e, searchText, setsearchText, searchFilter})}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchFilter: (searchText) => dispatch(searchFilter(searchText))
    }
}

export default connect(null, mapDispatchToProps)(Search);

const searchHandler = ({ e, setsearchText, searchFilter }) => {
    setsearchText(e.target.value);
    const searchText = e.target.value
        searchFilter(searchText)
}