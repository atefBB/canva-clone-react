import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { login, signup, clearErrors } from '../../actions/session_actions';

const demoUser = { email: 'demo@aa.io', password: '123456' };

const mapStateToProps = (state: any) => ({
  formType: 'signup',
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch: any) => ({
  action: (user: any) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  demoLogin: () => dispatch(login(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
