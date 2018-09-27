import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Parser from 'html-react-parser';
import styles from './ghostButton.scss';

const cx = classNames.bind(styles);

export const GhostButton = ({
  type,
  children,
  disabled,
  color,
  icon,
  onClick,
  tiny,
  minWidth,
  className,
}) => {
  const classes = cx(className, {
    'ghost-button': true,
    disabled,
    tiny,
    [`color-${color}`]: color,
    'with-icon': icon,
    'mobile-minified': icon && children,
  });
  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      style={minWidth && { minWidth }}
    >
      {icon && <i className={cx({ icon: true, 'only-icon': !children })}>{Parser(icon)}</i>}
      {children && <span className={cx('text')}>{children}</span>}
    </button>
  );
};

GhostButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tiny: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  minWidth: PropTypes.number,
  onClick: PropTypes.func,
};

GhostButton.defaultProps = {
  children: null,
  disabled: false,
  tiny: false,
  minWidth: null,
  color: 'tealish',
  icon: '',
  className: '',
  type: 'button',
  onClick: () => {},
};
