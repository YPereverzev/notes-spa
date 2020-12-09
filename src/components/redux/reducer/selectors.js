import { createSelector } from 'reselect';

export const notesSelector = (state) => state.notes.entities;
export const notesLoadingSelector = (state) => state.notes.loading;
export const notesLoadedSelector = (state) => state.notes.loaded;
export const notesLoadingErrorSelector = (state) => state.notes.error;
export const loadFirstNoteSelector = (state) => state.notes.entities[0]?.id

export const trashedNotesSelector = (state) => state.notes.trashed || null

export const allNotesSelector = (state) => state?.notes?.entities || null

export const tmpIdSelector = (state, activeNoteId) => {
    return state.notes.entities?.find(item => item.id === activeNoteId);
};

export const entrySelector = createSelector(
    notesSelector,
    tmpIdSelector,
    (entities, id) => {
      const buff = entities.find((note) => note.id === id);
      return buff;
    },
  );

