import { connect } from 'react-redux';
import Browse from './Browse';
import { toggleModal } from '../actions/modal_actions';

const mapStateToProps = (state: any) => ({
  mode: state.ui.mode,
  sessionId: state.session.id,
  uploadedModal: state.ui.modal.uploadedModal
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleModal: (modal: any, id: any) => dispatch(toggleModal(modal, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
