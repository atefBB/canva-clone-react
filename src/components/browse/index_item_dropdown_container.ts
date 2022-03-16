import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { withRouter } from 'react-router-dom';
import IndexItemDropdown from './IndexItemDropdown';
import { deleteDesign, updateDesign } from '../../actions/design_actions';
import elementsOnDesign from '../../reducers/design/elements_selector';
import { requestFolders } from '../../actions/folder_actions';

const mapStateToProps = (state: any, ownProps: any) => {
  const folders = Object.values(state.entities.folders);
  return {
    currentUser: state.entities.users[state.session.id],
    design: ownProps.design,
    toggleDropdown: ownProps.toggleDropdown,
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    folders: folders.filter((folder) => folder.ownerId === state.session.id),
    elements: (ownProps.design) ? elementsOnDesign(state, ownProps.design.id) : [],
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  updateDesign: (design: any) => dispatch(updateDesign(design)),
  deleteDesign: (designId: any) => dispatch(deleteDesign(designId)),
  requestFolders: () => dispatch(requestFolders())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IndexItemDropdown));
