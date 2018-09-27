import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedRelative } from 'react-intl';
import styles from './absRelTime.scss';

const cx = classNames.bind(styles);

export const AbsRelTime = ({ className, time, showDate, showTime, noHover }) => (
  <div className={cx('abs-rel-time', className, { 'no-hover': noHover })}>
    {time && (
      <Fragment>
        <span className={cx('relative-time')}>
          <FormattedRelative value={time} />
        </span>
        <span className={cx('absolute-time')}>
          {showDate && moment(time).format('YYYY-MM-DD')}
          {showDate && showTime && ' '}
          {showTime && moment(time).format('HH:mm:ss')}
        </span>
      </Fragment>
    )}
  </div>
);
AbsRelTime.propTypes = {
  time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  showDate: PropTypes.bool,
  showTime: PropTypes.bool,
  noHover: PropTypes.bool,
};

AbsRelTime.defaultProps = {
  time: 0,
  className: '',
  showDate: false,
  showTime: false,
  noHover: false,
};
