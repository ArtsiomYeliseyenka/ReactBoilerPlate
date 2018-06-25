import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './appLayout.scss';

const cx = classNames.bind(styles);

export class AppLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };
  static defaultProps = {
    children: null,
  };
  render() {
    return <div className={cx('app-layout')}>{this.props.children}</div>;
  }
}
