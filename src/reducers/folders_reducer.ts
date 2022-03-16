import { RECEIVE_FOLDER, RECEIVE_FOLDERS, REMOVE_FOLDER } from '../actions/folder_actions';

const foldersReducer = (state = {}, action: any) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_FOLDERS:
      return { ...state, ...action.folders };
    case RECEIVE_FOLDER:
      return { ...state, ...{ [action.payload.folder.id]: action.payload.folder } };
    case REMOVE_FOLDER:
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      delete nextState[action.payload.folder.id];
      return nextState;
    default:
      return state;
  }
};

export default foldersReducer;
