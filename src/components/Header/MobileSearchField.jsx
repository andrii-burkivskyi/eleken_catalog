import React, { Component } from 'react';

import Icon from 'components/Icon/Icon.jsx';

import styles from './MobileSearchField.scss';

export default class MobileSearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <form
        className={styles.container}
        onSubmit={this.onSubmit}
      >
        <input
          className={styles.input}
          value={this.state.value}
          onChange={this.onChange}
          type="text"
        />

        <button className={styles.button}>
          <Icon
            className={styles.icon}
            glyph={'#search'}
          />
        </button>
      </form>
    );
  }
}
