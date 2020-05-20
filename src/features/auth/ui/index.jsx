import React from 'react';
import * as Auth from './elements';
import * as Shared from '../../shared/elements';
import Input from '../../shared/Input';
import Icon from '../../shared/Icon';
import Button from '../../shared/Button';
import PseudoLink from '../../shared/PseudoLink';
import getText from '../../shared/Text';

const text = getText('AUTH');

const AuthView = ({ pending, login, password, error, isButtonEnabled, changeInputValue, sendLoginRequest, sendRegisterRequest }) =>
  <Auth.Container>
    <Auth.InnerContainer>
      <Shared.Title>{text('TITLE')}</Shared.Title>
      <Auth.Card>
        <Auth.TitleTextContainer>
          <Shared.Text>{text('LOGIN_TO_CONTINUE')}</Shared.Text>
        </Auth.TitleTextContainer>
        <Auth.IconWrapper>
          <Icon name = 'logo' />
        </Auth.IconWrapper>
        <Auth.InputWrapper>
          <Input
            required
            title = {text('INPUT_LOGIN_TITLE')}
            value = {login}
            placeholder = {text('INPUT_LOGIN_PLACEHOLDER')}
            onChange = {value => changeInputValue({ login: value, password })}
          />
        </Auth.InputWrapper>
        <Auth.InputWrapper>
          <Input
            required
            title = {text('INPUT_PASSWORD_TITLE')}
            type = 'password'
            value = {password}
            placeholder = {text('INPUT_PASSWORD_PLACEHOLDER')}
            onChange = {value => changeInputValue({ login, password: value })}
          />
        </Auth.InputWrapper>
        {error && <Auth.ErrorContainer>{error}</Auth.ErrorContainer>}
        <Auth.ButtonWrapper>
          <Button
            state = {pending ? 'disabled' : isButtonEnabled ? 'default' : 'disabled'}
            onClick = {() => sendLoginRequest(login, password)}
          >
            {text('SUBMIT_FORM_BUTTON')}
          </Button>
        </Auth.ButtonWrapper>
        <Auth.RegisterLinkWrapper>
          <PseudoLink
            state = {pending ? 'disabled' : isButtonEnabled ? 'default' : 'disabled'}
            onClick = {() => sendRegisterRequest(login, password)
          }>
            {text('REGISTER_LINK')}
          </PseudoLink>
        </Auth.RegisterLinkWrapper>
      </Auth.Card>
    </Auth.InnerContainer>
  </Auth.Container>

export default AuthView;