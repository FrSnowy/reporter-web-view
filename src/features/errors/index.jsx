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

const COUNT_ON_PAGE = 10;

class ErrorsController extends React.Component {
  state = {
    maxPage: 0,
    page: parseInt(new URL(window.location.href).searchParams.get('page'))
  };

  componentDidMount() {
    const { page } = this.state;
    const { getErrorsInfo, getErrorsCountInfo } = this.props;
    
    this.setState({ page: page <= 1 || Number.isNaN(page) ? 1 : page }, () => {
      Promise.all([
        getErrorsInfo({ limit: `${(this.state.page - 1) * COUNT_ON_PAGE}, ${this.state.page * COUNT_ON_PAGE}`}),
        getErrorsCountInfo(),
      ]).then(([errors, count]) => this.setState({ maxPage: Math.ceil(count / COUNT_ON_PAGE) }));
    });
  };

  render() {
    return <ErrorsView {...this.props} maxPage = {this.state.maxPage} page = {this.state.page} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsController);