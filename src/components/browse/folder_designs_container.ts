import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
import { requestFolder } from '../../actions/folder_actions';

const mapStateToProps = (state: any, ownProps: any) => {
  const designs = Object.values(state.entities.designs);
  const { folderId } = ownProps.match.params;
  return {
    folder: state.entities.folders[folderId],
    designs: designs.filter((design) => (
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      design.userId === state.session.id
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      && design.folderId === parseInt(folderId, 10)
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      && !design.trash
    )),
  };
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'dispatch' implicitly has an 'any' type.
const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDesigns: () => dispatch(requestFolder(ownProps.match.params.folderId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
