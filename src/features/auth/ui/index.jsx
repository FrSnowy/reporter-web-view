import React from 'react';
import { AuthContainer, AuthInnerContainer, AuthCard, AuthTitleTextContainer, AuthInputWrapper, AuthIconWrapper, AuthButtonWrapper, RegisterLinkWrapper, ErrorContainer } from './elements';
import { Title, Text } from '../../shared/elements';
import Input from '../../shared/Input';
import Icon from '../../shared/Icon';
import Button from '../../shared/Button';
import PseudoLink from '../../shared/PseudoLink';

const AuthView = ({ pending, login, password, error, isButtonEnabled, changeInputValue, sendLoginRequest, sendRegisterRequest }) =>
  <AuthContainer>
    <AuthInnerContainer>
      <Title>Авторизация</Title>
      <AuthCard>
        <AuthTitleTextContainer>
          <Text>Войдите, чтобы продолжить</Text>
        </AuthTitleTextContainer>
        <AuthIconWrapper>
          <Icon name = 'logo' />
        </AuthIconWrapper>
        <AuthInputWrapper>
          <Input
            required
            title = 'Логин'
            value = {login}
            placeholder = 'Логин для авторизации'
            onChange = {value => changeInputValue({ login: value, password })}
          />
        </AuthInputWrapper>
        <AuthInputWrapper>
          <Input
            required
            title = 'Пароль'
            type = 'password'
            value = {password}
            placeholder = 'Пароль для авторизации'
            onChange = {value => changeInputValue({ login, password: value })}
          />
        </AuthInputWrapper>
        {error && <ErrorContainer>{error}</ErrorContainer>}
        <AuthButtonWrapper>
          <Button
            state = {pending ? 'disabled' : isButtonEnabled ? 'default' : 'disabled'}
            onClick = {() => sendLoginRequest(login, password)}
          >
            Войти
          </Button>
        </AuthButtonWrapper>
        <RegisterLinkWrapper>
          <PseudoLink
            state = {pending ? 'disabled' : isButtonEnabled ? 'default' : 'disabled'}
            onClick = {() => sendRegisterRequest(login, password)
          }>
            Создать аккаунт из введенных данных
          </PseudoLink>
        </RegisterLinkWrapper>
      </AuthCard>
    </AuthInnerContainer>
  </AuthContainer>

export default AuthView;