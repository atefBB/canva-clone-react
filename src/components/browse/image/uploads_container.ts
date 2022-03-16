import { connect } from 'react-redux';
import AllImages from './AllImages';
import { fetchUserUploads, receiveUpload } from '../../../actions/uploaded_image_actions';
import { toggleModal } from '../../../actions/modal_actions';

const mapStateToProps = (state: any) => {
  const { uploadedImages } = state.entities.users[state.session.id];
  return {
    folder: { name: 'Uploads' },
    images: uploadedImages ? uploadedImages.map((id: any) => state.entities.uploadedImages[id]) : [],
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchUserUploads: () => dispatch(fetchUserUploads()),
  receiveUpload: (payload: any) => dispatch(receiveUpload(payload)),
  toggleModal: (id: any) => dispatch(toggleModal('uploadedModal', id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllImages);
