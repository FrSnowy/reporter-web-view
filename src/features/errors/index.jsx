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
  page = parseInt(new URL(window.location.href).searchParams.get('page'));
  state = { maxPage: 0 };

  componentDidMount() {
    const { getErrorsInfo, getErrorsCountInfo } = this.props;
    if (this.page <= 1 || Number.isNaN(this.page)) this.page = 1;

    Promise.all([
      getErrorsInfo({ limit: `${(this.page - 1) * COUNT_ON_PAGE}, ${this.page * COUNT_ON_PAGE}`}),
      getErrorsCountInfo(),
    ]).then(([errors, count]) => this.setState({ maxPage: Math.ceil(count / COUNT_ON_PAGE) }));
  };

  render() {
    return <ErrorsView {...this.props} maxPage = {this.state.maxPage} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsController);