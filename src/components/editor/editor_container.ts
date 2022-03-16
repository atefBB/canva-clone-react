import { connect } from 'react-redux';
import Editor from './Editor';
import { requestDesign, updateDesign } from '../../actions/design_actions';
import elementsOnDesign from '../../reducers/design/elements_selector';
import { receiveElement, createElement } from '../../actions/element_actions';

const mapStateToProps = (state: any, ownProps: any) => {
  const design = state.entities.designs[ownProps.match.params.id];
  return {
    design,
    elements: (design) ? elementsOnDesign(state, design.id) : [],
  };
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'dispatch' implicitly has an 'any' type.
const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDesign: () => dispatch(requestDesign(ownProps.match.params.id)),
  updateDesign: (design: any) => dispatch(updateDesign(design)),
  receiveElement: (element: any) => dispatch(receiveElement(element)),
  createElement: (designId: any, element: any) => dispatch(createElement(designId, element))
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
