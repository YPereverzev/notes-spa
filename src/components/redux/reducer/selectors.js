export const notesSelector = (state) => state.allExporters.entities;
export const notesLoadingSelector = (state) => state.allExporters.loading;
export const notesLoadedSelector = (state) => state.allExporters.loaded;
export const notesLoadingErrorSelector = (state) => state.allExporters.error;

export const entrySelector = (state, noteId) => state.allExporters.entities;

export const allNotesSelector = (state) => state?.allExporters?.entities || null

export const entrySelector = createSelector(
    notesSelector,
    noteId,
    (entities, id) => {
      const buff = entities.find((note) => note.id === id);
      return buff;
    },
  );

  const idSelector = (_, ownProps) => {
    return ownProps.activeNote.id;
  };
  