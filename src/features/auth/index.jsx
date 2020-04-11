import React from 'react';
import AuthView from './ui';
import * as duck from './duck';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  login: duck.selectors.loginInputValue(state),
  password: duck.selectors.passwordInputValue(state),
  isButtonEnabled: duck.selectors.isButtonEnabled(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

const AuthController = ({ login, password, isButtonEnabled, changeInputValue }) =>
  <AuthView login = {login} password = {password} isButtonEnabled = {isButtonEnabled} changeInputValue = {changeInputValue} />

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthController);