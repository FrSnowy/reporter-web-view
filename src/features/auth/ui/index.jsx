import React from 'react';
import { AuthContainer, AuthInnerContainer, AuthCard, AuthTitleTextContainer, AuthInputWrapper, AuthIconWrapper, AuthButtonWrapper } from './elements';
import { Title, Text } from '../../shared/elements';
import Input from '../../shared/Input';
import Icon from '../../shared/Icon';
import Button from '../../shared/Button';

const AuthView = ({ login, password, isButtonEnabled, changeInputValue }) =>
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
            title = 'Логин'
            placeholder = 'Логин для авторизации'
            required
            value = {login}
            onChange = {value => changeInputValue({ login: value, password })}
          />
        </AuthInputWrapper>
        <AuthInputWrapper>
          <Input
            title = 'Пароль'
            placeholder = 'Пароль для авторизации'
            type = 'password'
            required
            value = {password}
            onChange = {value => changeInputValue({ login, password: value })}
          />
        </AuthInputWrapper>
        <AuthButtonWrapper>
          <Button state = {isButtonEnabled ? 'default' : 'disabled'}>
            Войти
          </Button>
        </AuthButtonWrapper>
      </AuthCard>
    </AuthInnerContainer>
  </AuthContainer>

export default AuthView;