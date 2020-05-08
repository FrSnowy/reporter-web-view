import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as duck from './duck';
import MainView from './ui';

const mapStateToProps = state => ({
  error: duck.selectors.errorBlock(state),
  users: duck.selectors.usersBlock(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class MainController extends React.Component {
  componentDidMount = () => {
    const { getErrorInfo, getUsersInfo } = this.props;
    Promise.all([
      getErrorInfo(),
      getUsersInfo(),
    ]);
  }

  render() {
    return <MainView {...this.props} />
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainController);