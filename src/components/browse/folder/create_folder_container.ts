import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { withRouter } from 'react-router-dom';
import CreateFolder from './CreateFolder';
import { createFolder } from '../../../actions/folder_actions';

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'state' implicitly has an 'any' type.
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  toggleModal: ownProps.toggleModal,
  folder: { name: '' },
  formType: 'Create New Folder'
});

const mapDispatchToProps = (dispatch: any) => ({
  action: (folder: any) => dispatch(createFolder(folder))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateFolder));
