import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    notes
} from '../../redux/reducer/selectors';
  
import Loader from '../loader';
import styles from './notestitle.module.css';

const NotesTitle = () => {
    return (
        <div>
            <div className={styles.notes_names}>
                <p>1Как быстро обновдять MacOS</p>
            </div>
        </div>
    );

}

const mapStateToProps = (state, ownProps) => {
    return {
        notes: notesSelector(state, ownProps),
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
      loadNotes: () => dispatch(loadNotes()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NotesTitle);