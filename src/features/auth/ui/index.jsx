import React from 'react';
import { AuthContainer, AuthInnerContainer, AuthCard, AuthTitleTextContainer, AuthInputWrapper, AuthIconWrapper, AuthButtonWrapper, RegisterLinkWrapper, ErrorContainer } from './elements';
import { Title, Text } from '../../shared/elements';
import Input from '../../shared/Input';
import Icon from '../../shared/Icon';
import Button from '../../shared/Button';
import PseudoLink from '../../shared/PseudoLink';
import getText from '../../shared/Text';

const text = getText('AUTH');

const AuthView = ({ pending, login, password, error, isButtonEnabled, changeInputValue, sendLoginRequest, sendRegisterRequest }) =>
  <AuthContainer>
    <AuthInnerContainer>
      <Title>{text('TITLE')}</Title>
      <AuthCard>
        <AuthTitleTextContainer>
          <Text>{text('LOGIN_TO_CONTINUE')}</Text>
        </AuthTitleTextContainer>
        <AuthIconWrapper>
          <Icon name = 'logo' />
        </AuthIconWrapper>
        <AuthInputWrapper>
          <Input
            required
            title = {text('INPUT_LOGIN_TITLE')}
            value = {login}
            placeholder = {text('INPUT_LOGIN_PLACEHOLDER')}
            onChange = {value => changeInputValue({ login: value, password })}
          />
        </AuthInputWrapper>
        <AuthInputWrapper>
          <Input
            required
            title = {text('INPUT_PASSWORD_TITLE')}
            type = 'password'
            value = {password}
            placeholder = {text('INPUT_PASSWORD_PLACEHOLDER')}
            onChange = {value => changeInputValue({ login, password: value })}
          />
        </AuthInputWrapper>
        {error && <ErrorContainer>{error}</ErrorContainer>}
        <AuthButtonWrapper>
          <Button
            state = {pending ? 'disabled' : isButtonEnabled ? 'default' : 'disabled'}
            onClick = {() => sendLoginRequest(login, password)}
          >
            {text('SUBMIT_FORM_BUTTON')}
          </Button>
        </AuthButtonWrapper>
        <RegisterLinkWrapper>
          <PseudoLink
            state = {pending ? 'disabled' : isButtonEnabled ? 'default' : 'disabled'}
            onClick = {() => sendRegisterRequest(login, password)
          }>
            {text('REGISTER_LINK')}
          </PseudoLink>
        </RegisterLinkWrapper>
      </AuthCard>
    </AuthInnerContainer>
  </AuthContainer>

export default AuthView;