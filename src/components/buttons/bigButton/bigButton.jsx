import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './bigButton.scss';

const cx = classNames.bind(styles);

export const BigButton = ({ type, children, disabled, color, roundedCorners, onClick }) => {
  const classes = cx('big-button', {
    'rounded-corners': roundedCorners,
    disabled,
    [`color-${color}`]: color,
  });

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

BigButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  type: PropTypes.string,
  roundedCorners: PropTypes.bool,
  onClick: PropTypes.func,
};

BigButton.defaultProps = {
  children: '',
  disabled: false,
  color: 'booger',
  type: 'button',
  roundedCorners: false,
  onClick: () => {},
};
