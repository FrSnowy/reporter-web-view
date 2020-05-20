import React from 'react';
import BaseContainer from '../BaseContainer';
import * as Element from './elements';
import getText from '../Text';
import Link from '../Link';

const text = getText('HEADER');

class Header extends React.Component {
  state = { title: 'Reporter', menuVisible: false };

  changeLogoOnResize = () => {
    this.setState({ title: window.innerWidth <= 359 ? text('SITE_NAME')[0] : text('SITE_NAME') })
  }

  hideMenuOnPageClick = e => {
    if (e.toElement.id !== 'user-block') this.changeMenuVisibiltiy(false);
  }

  changeMenuVisibiltiy = visible => this.setState({ menuVisible: visible });

  componentDidMount = () => {
    window.addEventListener('resize', this.changeLogoOnResize);
    window.addEventListener('click', this.hideMenuOnPageClick);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.changeLogoOnResize);
    window.removeEventListener('click', this.hideMenuOnPageClick);
  }

  logout = () => {
    document.cookie = 'auth-token=0; max-age=-1';
    window.location.href = '/auth';
  }

  render() {
    const { userName } = this.props;
    return (
      <BaseContainer fullWidth>
        <Element.Container>
          <BaseContainer direction = 'row'>
            <Element.TitleBlock>
              <a href = '/main'>
                {this.state.title}
              </a>
            </Element.TitleBlock>
            <Element.LinkBlock>
              <a href = '#'>{text('LINK_ERRORS')}</a>
              <a href = '#'>{text('LINK_STORIES')}</a>
              <a href = '#'>{text('LINK_STAT')}</a>
            </Element.LinkBlock>
            <Element.UserBlock onClick = {e => this.changeMenuVisibiltiy(!this.state.menuVisible)} id = 'user-block'>
              <Element.Dropdown visible = {this.state.menuVisible}>
                <span>{text('WELCOME')}, <strong>{userName}</strong></span>
                <hr />
                <Link onClick = {this.logout}>{text('LINK_LOGOUT')}</Link>
              </Element.Dropdown>
            </Element.UserBlock>
          </BaseContainer>
        </Element.Container>
      </BaseContainer>
    )
  }
};

export default Header;