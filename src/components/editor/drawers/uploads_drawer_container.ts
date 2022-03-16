import { connect } from 'react-redux';
import UploadsDrawer from './UploadsDrawer';
import { fetchUserUploads, receiveUpload } from '../../../actions/uploaded_image_actions';

const mapStateToProps = (state: any) => {
  const { uploadedImages } = state.entities.users[state.session.id];
  return {
    images: uploadedImages ? uploadedImages.map((id: any) => state.entities.uploadedImages[id]) : [],
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchUserUploads: () => dispatch(fetchUserUploads()),
  receiveUpload: (payload: any) => dispatch(receiveUpload(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadsDrawer);
