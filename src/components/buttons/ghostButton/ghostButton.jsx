import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Parser from 'html-react-parser';
import styles from './ghostButton.scss';

const cx = classNames.bind(styles);

export const GhostButton = ({ type, children, disabled, color, icon, onClick, tiny }) => {
  const classes = cx({
    'ghost-button': true,
    disabled,
    tiny,
    [`color-${color}`]: color,
    'with-icon': icon,
    'mobile-minified': icon && children,
  });
  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
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
  onClick: PropTypes.func,
};

GhostButton.defaultProps = {
  children: null,
  disabled: false,
  tiny: false,
  color: 'topaz',
  icon: '',
  type: 'button',
  onClick: () => {},
};
