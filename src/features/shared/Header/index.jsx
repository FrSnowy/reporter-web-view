import React from 'react';
import BaseContainer from '../BaseContainer';
import { HeaderContainer, TitleBlock, LinkBlock, UserBlock } from './elements';

class Header extends React.Component {
  state = { title: 'Reporter' };

  changeLogoOnResize = () => {
    this.setState({ title: window.innerWidth <= 359 ? 'R' : 'Reporter' })
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.changeLogoOnResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.changeLogoOnResize);
  }

  render() {
    return (
      <BaseContainer fullWidth>
        <HeaderContainer>
          <BaseContainer direction = 'row'>
            <TitleBlock>
              <a href = '/main'>
                {window.innerWidth <= 359 ? 'R' : 'Reporter'}
              </a>
            </TitleBlock>
            <LinkBlock>
              <a href = '#'>Ошибки</a>
              <a href = '#'>Истории</a>
              <a href = '#'>Статистика</a>
            </LinkBlock>
            <UserBlock/>
          </BaseContainer>
        </HeaderContainer>
      </BaseContainer>
    )
  }
};
  

export default Header;