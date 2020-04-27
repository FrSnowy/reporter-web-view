import React from 'react';
import * as authDuck from '../auth/duck';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLoggedIn: authDuck.selectors.isUserLoggedIn(state),
});

const MainController = props => {
  console.log(props);
  return <div>123</div>
}

export default connect(mapStateToProps)(MainController);