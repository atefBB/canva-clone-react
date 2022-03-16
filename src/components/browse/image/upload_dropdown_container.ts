import { connect } from 'react-redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { withRouter } from 'react-router-dom';
import ImageDropdown from './ImageDropdown';
import { updateUpload, deleteUpload } from '../../../actions/uploaded_image_actions';

const mapDispatchToProps = (dispatch: any) => ({
  updateImage: (uploadedImage: any) => dispatch(updateUpload(uploadedImage)),
  deleteImage: (uploadedImageId: any) => dispatch(deleteUpload(uploadedImageId))
});

export default connect(null, mapDispatchToProps)(ImageDropdown);
