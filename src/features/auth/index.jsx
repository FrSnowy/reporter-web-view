import React from 'react';
import AuthView from './ui';
import * as duck from './duck';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  pending: duck.selectors.pending(state),
  login: duck.selectors.loginInputValue(state),
  password: duck.selectors.passwordInputValue(state),
  isButtonEnabled: duck.selectors.isButtonEnabled(state),
  error: duck.selectors.error(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

const AuthController = props => <AuthView {...props} />

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthController);