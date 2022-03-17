import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Design from "./Design";
import { receiveElement } from "../../actions/element_actions";
import elementsOnDesign from "../../reducers/design/elements_selector";

const mapStateToProps = (state: any, ownProps: any) => {
  const design = state.entities.designs[ownProps.match.params.id];
  return {
    design,
    elements: design ? elementsOnDesign(state, design.id) : [],
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  receiveElement: (element: any) => dispatch(receiveElement(element)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Design));
