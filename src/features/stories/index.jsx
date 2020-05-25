import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as duck from './duck';
import StoriesView from './ui';
import withPagination from '../shared/HOCs/withPagination';

const mapStateToProps = state => ({
  pending: duck.selectors.isPending(state),
  list: duck.selectors.getStories(state),
  count: duck.selectors.getStoriesCount(state),
  error: duck.selectors.getRequestError(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(duck.actions, dispatch);

class StoriesController extends React.Component {
  getPageContent = () => {
    const { page, countOnPage, getStories, getStoriesCount } = this.props;
    Promise.all([
      getStories({ limit: `${(page - 1) * countOnPage}, ${page * countOnPage}`}),
      getStoriesCount(),
    ]);
  };

  componentDidMount() {
    this.getPageContent();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.getPageContent();
    }
  }
  render() {
    const { getStories, getStoriesCount, pending, ...rest } = this.props;
    if (pending) return null;
    return <StoriesView {...rest} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withPagination(StoriesController));