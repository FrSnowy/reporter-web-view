import React from 'react';
import AuthView from './ui';
import * as duck from './duck';
import * as appDuck from '../app/duck';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  pending: duck.selectors.pending(state),
  login: duck.selectors.loginInputValue(state),
  password: duck.selectors.passwordInputValue(state),
  isButtonEnabled: duck.selectors.isButtonEnabled(state),
  error: duck.selectors.error(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({...duck.actions, ...appDuck.actions }, dispatch);

class AuthController extends React.Component {
  async componentDidMount() {
    const isAlreadyLoggedIn = await this.props.isLoggedIn();
    if (isAlreadyLoggedIn) window.location.href = '/';
  }

  render() {
    return <AuthView {...this.props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthController);