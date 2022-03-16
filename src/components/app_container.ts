import { connect } from 'react-redux';
import { toggleModal } from '../actions/modal_actions';
import App from './app';

const mapStateToProps = (state: any) => ({
  mode: state.ui.mode,
  externalModal: state.ui.modal.externalModal
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleModal: (modal: any, id: any) => dispatch(toggleModal(modal, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
