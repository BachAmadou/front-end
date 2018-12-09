import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlusIcon from 'static/images/icons/plus.svg';
import ScreenReaderOnly from 'components/_common_/ScreenReaderOnly/ScreenReaderOnly';
import styles from './CloseButton.css';

export default class CloseButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['primary', 'secondary', 'white']),
  };

  static defaultProps = {
    disabled: false,
    theme: 'secondary',
  };

  render() {
    const { disabled, onClick, theme } = this.props;
    return (
      <button className={styles.CloseButton} disabled={disabled} onClick={onClick} type="button">
        <ScreenReaderOnly>Close</ScreenReaderOnly>

        <PlusIcon className={classNames(styles.icon, styles[theme])} />
      </button>
    );
  }
}
