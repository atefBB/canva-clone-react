import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserNav from './UserNav';
import { createDesign } from '../../actions/design_actions';

const mapStateToProps = (state: any) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()),
  createDesign: (design: any) => dispatch(createDesign(design))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
