import { createSelector } from 'reselect';

export const notesSelector = (state) => state.notes.entities;
export const notesLoadingSelector = (state) => state.notes.loading;
export const notesLoadedSelector = (state) => state.notes.loaded;
export const notesLoadingErrorSelector = (state) => state.notes.error;


export const allNotesSelector = (state) => state?.notes?.entities || null

const idSelector = (_, ownProps) => {
    return ownProps.activeNote.id;
};
  

export const entrySelector = createSelector(
    notesSelector,
    idSelector,
    (entities, id) => {
      const buff = entities.find((note) => note.id === id);
      return buff;
    },
  );

