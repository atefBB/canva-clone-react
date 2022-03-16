import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { withRouter } from 'react-router-dom';
import CreateDropDown from './CreateDropDown';
import { createDesign } from '../../actions/design_actions';

const mapStateToProps = (state: any) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch: any) => ({
  createDesign: (design: any) => dispatch(createDesign(design))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateDropDown));
