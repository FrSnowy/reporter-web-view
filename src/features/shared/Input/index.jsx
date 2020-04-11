import React from 'react';
import { InputContainer, CustomInput, Title, Error, RedStar } from './elements';

class Input extends React.PureComponent {
  state = {
    focus: false,
  };

  makeFocused = () => {
    const { onFocus = () => { } } = this.props;
    const { focus } = this.state;
    !focus && this.setState({ focus: true }, () => onFocus());
  };

  makeBlur = () => {
    const { onBlur = () => { } } = this.props;
    const { focus } = this.state;
    focus && this.setState({ focus: false }, () => onBlur());
  };

  changeHandler = ({ target }) => {
    const { onChange = () => { } } = this.props;
    onChange(target.value);
  };

  render() {
    const { title, value, placeholder, type = 'text', error = false, required = false, disabled = false } = this.props;
    const { focus } = this.state;
  
    return (
      <InputContainer error = {error} disabled = {disabled}>
        { 
          title && (
            <Title isOnTop = {focus || value !== ''} error = {error} disabled = {disabled}>
              {title}
              {required && <RedStar>*</RedStar>}
            </Title>
          )
        }
        <CustomInput
          value = {value}
          onFocus = {this.makeFocused}
          onBlur = {this.makeBlur}
          onChange = {this.changeHandler}
          placeholder = {placeholder}
          type = {type}
          error = {error}
          disabled = {disabled}
        />
        {
          !disabled && error && (
            <Error>{error}</Error>
          )
        }
      </InputContainer>
    )
  }
}

export default Input;