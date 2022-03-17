import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CreateFolder from "./CreateFolder";
import { updateFolder, deleteFolder } from "../../../actions/folder_actions";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'state' implicitly has an 'any' type.
const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  toggleModal: ownProps.toggleModal,
  folder: ownProps.folder,
  formType: "Edit Folder",
});

const mapDispatchToProps = (dispatch: any) => ({
  action: (folder: any) => dispatch(updateFolder(folder)),
  deleteFolder: (folderId: any) => dispatch(deleteFolder(folderId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateFolder as any));
