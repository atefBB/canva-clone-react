import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login, clearErrors } from '../../actions/session_actions';

const demoUser = { email: 'demo@aa.io', password: '123456' };

const mapStateToProps = (state: any) => ({
  formType: 'login',
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch: any) => ({
  action: (user: any) => dispatch(login(user)),
  demoLogin: () => dispatch(login(demoUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
