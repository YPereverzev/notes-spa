import React from 'react';
import styles from './trashed.module.css';
import { connect } from 'react-redux';

import {
    trashedNotesSelector,
    tmpIdSelector,
    notesLoadedSelector,
    notesLoadingSelector,
} from '../../../redux/reducer/selectors';

const Trashed = ({trashedNotesSelector}) => {
    const trashedQty = 2;
    return (
        <div className={styles.outer_wrapper}>
            <div className={styles.wrapper}>
                {trashedNotesSelector.length} trashed note
                {trashedNotesSelector.length > 1 ? 's' : ''}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        entry: tmpIdSelector(state, ownProps.activeNoteId),
        loaded: notesLoadedSelector(state),
        loading: notesLoadingSelector (state),
        trashedNotesSelector: trashedNotesSelector(state),
    };
  };

export default connect(mapStateToProps)(Trashed);
