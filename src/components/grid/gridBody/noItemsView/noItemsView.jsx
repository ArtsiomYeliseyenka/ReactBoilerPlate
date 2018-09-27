import React from 'react';
import Parser from 'html-react-parser';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import EmptyContainerImg from 'common/img/img-empty-container-inline.svg';
import styles from './noItemsView.scss';

const cx = classNames.bind(styles);

export const NoItemsView = ({ text }) => (
  <div className={cx('no-items-view')}>
    <div className={cx('icon')}>{Parser(EmptyContainerImg)}</div>
    <div className={cx('text-content')}>
      {text.top && <div className={cx('top')}>{text.top}</div>}
      {text.bottom && <div className={cx('bottom')}>{text.bottom}</div>}
    </div>
  </div>
);

NoItemsView.propTypes = {
  text: PropTypes.object,
};
NoItemsView.defaultProps = {
  text: {},
};
