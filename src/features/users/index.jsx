import React from 'react';
import * as duck from './duck';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withPagination from '../shared/HOCs/withPagination';
import UsersView from './ui';

const mapStateToProps = state => ({
  pending: duck.selectors.isPending(state),
  list: duck.selectors.getUsers(state),
  count: duck.selectors.getUsersCount(state),
  error: duck.selectors.getRequestError(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class UsersController extends React.Component {
  getPageContent = () => {
    const { page, countOnPage, getUsers, getUsersCount } = this.props;
    Promise.all([
      getUsers({ limit: `${(page - 1) * countOnPage}, ${page * countOnPage}`}),
      getUsersCount(),
    ]);
  };

  componentDidMount() {
    this.getPageContent();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.getPageContent();
    }
  };

  render() {
    const { getUsers, getUsersCount, pending, ...rest } = this.props;
    if (pending) return null;
    return <UsersView {...rest} />;
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withPagination(UsersController));