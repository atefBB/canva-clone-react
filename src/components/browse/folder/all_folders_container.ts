import { connect } from 'react-redux';
import AllFolders from './AllFolders';
import { requestFolders } from '../../../actions/folder_actions';

const mapStateToProps = (state: any) => {
  const folders = Object.values(state.entities.folders);
  return {
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    folders: folders.filter((folder) => folder.ownerId === state.session.id),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  requestFolders: () => dispatch(requestFolders())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllFolders);
