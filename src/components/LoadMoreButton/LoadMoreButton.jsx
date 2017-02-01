import React, { Component } from 'react';

import styles from './LoadMoreButton.scss';

export default class LoadMoreButton extends Component {
  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    const { page, filter, loadMoreFunction } = this.props;

    loadMoreFunction(filter, (page + 1));
  }

  render() {
    const { page, totalPages } = this.props;

    return (
      <div className={styles.container}>
        {
          totalPages > page &&
          <button
            className={styles.button}
            onClick={this.loadMore}
          >
            Load more...
          </button>
        }
      </div>
    );
  }
}
