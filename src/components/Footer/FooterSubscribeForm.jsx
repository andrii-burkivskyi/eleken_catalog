import React, { Component } from 'react';

import Icon from 'components/Icon/Icon.jsx';

import styles from './FooterSubscribeForm.scss';

export default class FooterSubscribeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    this.setState({ email: '' });
  }

  render() {
    const { email } = this.state;
    return (
      <form className={styles.container} onSubmit={this.onSubmit}>
        <div className={styles.row}>
          <h4 className={styles.subtitle}>subscribe</h4>
          <h3 className={styles.title}>Stay updated on news</h3>

          <div className={styles.email}>
            <input
              className={styles.field}
              type={'email'}
              value={email}
              onChange={this.onChange}
              placeholder={'YOUR EMAIL ADDRESS'}
            />

            <Icon
              className={styles.icon}
              glyph={'#arrow'}
            />
          </div>
        </div>
      </form>
    );
  }
}
