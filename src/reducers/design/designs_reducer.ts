import { RECEIVE_DESIGNS, RECEIVE_DESIGN, REMOVE_DESIGN } from '../../actions/design_actions';
import { RECEIVE_FOLDER } from '../../actions/folder_actions';
import { CREATE_ELEMENT } from '../../actions/element_actions';

const designsReducer = (state = {}, action: any) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_DESIGNS:
      return { ...state, ...action.designs };
    case RECEIVE_DESIGN:
      return { ...state, ...{ [action.payload.design.id]: action.payload.design } };
    case REMOVE_DESIGN:
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      delete nextState[action.payload.design.id];
      return nextState;
    case CREATE_ELEMENT:
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      const newDesign = { ...nextState[action.designId] };
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      newDesign.elements = [...nextState[action.designId].elements, action.element.id];
      return { ...state, [newDesign.id]: newDesign };
    case RECEIVE_FOLDER:
      return { ...state, ...action.payload.designs };
    default:
      return state;
  }
};

export default designsReducer;
