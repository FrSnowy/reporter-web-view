import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as duck from './duck';
import MainView from './ui';

const mapStateToProps = state => ({
  error: duck.selectors.errorBlock(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class MainController extends React.Component {
  componentDidMount = () => {
    const { getLastErrors, getAllErrors } = this.props;
    Promise.all([
      getLastErrors(),
      getAllErrors(),
    ]);
  }

  render() {
    return <MainView {...this.props} />
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainController);