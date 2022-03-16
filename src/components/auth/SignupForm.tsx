import React from 'react';
import ExternalSignup from './ExternalSignup';
import EmailSignup from './EmailSignup';

class SignupForm extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      showExternal: true,
      username: '',
      email: '',
      password: '',
      animate: false,
    };
    this.changeView = this.changeView.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'clearErrors' does not exist on type 'Rea... Remove this comment to see the full error message
    const { clearErrors } = this.props;
    clearErrors();
  }

  changeView() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'showExternal' does not exist on type 'Re... Remove this comment to see the full error message
    const { showExternal } = this.state;
    this.setState({ showExternal: !showExternal });
  }

  handleChange(form: any) {
    return (e: any) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  handleSubmit(e: any) {
    e.preventDefault();
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'action' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { action, history } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'username' does not exist on type 'Readon... Remove this comment to see the full error message
    const { username, email, password } = this.state;
    action({ username, email, password });
    history.push('/');
  }


  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'showExternal' does not exist on type 'Re... Remove this comment to see the full error message
    const { showExternal, animate } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'errors' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { errors, demoLogin } = this.props;
    return (
      <>
        {
          showExternal
            ? (
              <ExternalSignup
                changeView={this.changeView}
                demoLogin={demoLogin}
                animate={animate}
              />
            )
            : (
              <EmailSignup
                errors={errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                changeView={this.changeView}
                animate={animate}
              />
            )
        }
      </>
    );
  }
}

export default SignupForm;
