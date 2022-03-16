import { RECEIVE_DESIGN, REMOVE_DESIGN } from '../../actions/design_actions';
import { RECEIVE_ELEMENT, CREATE_ELEMENT } from '../../actions/element_actions';

const elementsReducer = (state = {}, action: any) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_DESIGN:
      return { ...state, ...action.payload.elements };
    case REMOVE_DESIGN:
      if (action.payload.elements) {
        Object.keys(action.payload.elements).forEach((id) => {
          // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          delete nextState[id];
        });
        return nextState;
      }
      return state;
    case RECEIVE_ELEMENT:
      return { ...state, [action.element.id]: action.element };
    case CREATE_ELEMENT:
      return { ...state, [action.element.id]: action.element };
    default:
      return state;
  }
};

export default elementsReducer;
