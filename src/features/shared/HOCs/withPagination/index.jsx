import React from 'react';

const withPagination = (Wrapped, config = { }) => class extends React.Component {
  constructor(props) {
    super(props);
  
    if (!props.count && props.count !== 0) {
      throw Error('No count in Wrapped component');
    }

    this.state = { ...this.calculatePages() };
  }

  calculatePages = () => {
    const { COUNT_ON_PAGE = 10 } = config;

    let maxPage = Math.ceil(this.props.count / COUNT_ON_PAGE);
    if (maxPage === null || isNaN(maxPage)) maxPage = 1;

    let page = parseInt(new URL(window.location.href).searchParams.get('page'));
    if (page === null || isNaN(page)) page = 1;

    return { maxPage, page };
  }

  componentDidMount() {
    const { page } = this.state;
    this.setState({ page: page <= 1 || Number.isNaN(page) ? 1 : page });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({ ...this.calculatePages() });
    }
  }

  render() {
    const { COUNT_ON_PAGE = 10 } = config;
    const { page, maxPage } = this.state;
    return <Wrapped {...this.props} page = {page} maxPage = {maxPage} countOnPage = { COUNT_ON_PAGE }/>
  }
};

export default withPagination;