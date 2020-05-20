import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as duck from './duck';
import ErrorsView from './ui';

const mapStateToProps = state => ({
  pending: duck.selectors.isPending(state),
  list: duck.selectors.getErrors(state),
  count: duck.selectors.getErrorsCount(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class ErrorsController extends React.Component {
  componentDidMount() {
    const { getErrorsInfo, getErrorsCountInfo } = this.props;
    Promise.all([
      getErrorsInfo(),
      getErrorsCountInfo(),
    ]);
  }
  render() {
    return <ErrorsView {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsController);