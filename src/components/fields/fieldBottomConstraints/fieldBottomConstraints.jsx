import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './fieldBottomConstraints.scss';

const cx = classNames.bind(styles);

export const FieldBottomConstraints = ({ text, children, ...rest }) => (
  <div className={cx('field-bottom-constraints')}>
    <div className={cx('container')}>{children && cloneElement(children, rest)}</div>
    <div className={cx('text')}>{text}</div>
  </div>
);

FieldBottomConstraints.propTypes = {
  text: PropTypes.node,
  children: PropTypes.node,
};
FieldBottomConstraints.defaultProps = {
  text: '',
  children: null,
};
