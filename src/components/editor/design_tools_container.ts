import { connect } from 'react-redux';
import DesignTools from './DesignTools';
import { receiveElement } from '../../actions/element_actions';

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'state' implicitly has an 'any' type.
const mapStateToProps = (state, ownProps) => ({
  element: state.entities.elements[ownProps.selection]
});

const mapDispatchToProps = (dispatch: any) => ({
  receiveElement: (element: any) => dispatch(receiveElement(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(DesignTools);
