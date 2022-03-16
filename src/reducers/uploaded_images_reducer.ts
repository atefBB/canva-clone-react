import { RECEIVE_USER_UPLOADS, RECEIVE_UPLOAD, REMOVE_UPLOAD } from '../actions/uploaded_image_actions';

const uploadedImagesReducer = (state = {}, action: any) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_USER_UPLOADS:
      return { ...state, ...action.payload.uploadedImages };
    case REMOVE_UPLOAD:
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      delete nextState[action.payload.uploadedImage.id];
      return nextState;
    case RECEIVE_UPLOAD:
      return { ...state, [action.payload.uploadedImage.id]: action.payload.uploadedImage };
    default:
      return state;
  }
};

export default uploadedImagesReducer;
