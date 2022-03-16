import { TOGGLE_MODAL } from '../actions/modal_actions';

const defaultState = {
  uploadedModal: null,
  externalModal: null,
};

const modalReducer = (state = defaultState, action: any) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, [action.modal]: action.id };
    default:
      return state;
  }
};

export default modalReducer;
