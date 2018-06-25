import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './inputCheckbox.scss';
import { CheckIcon } from './checkIcon';

const cx = classNames.bind(styles);

export const InputCheckbox = ({ children, value, disabled, onChange, onFocus, onBlur }) => (
  <label className={cx('input-checkbox')} onFocus={onFocus} onBlur={onBlur} tabIndex="1">
    <input
      type="checkbox"
      className={cx('input')}
      checked={value}
      disabled={disabled}
      onChange={onChange}
    />
    <CheckIcon disabled={disabled} centered={!children} checked={value} />
    {children && <span className={cx({ 'children-container': true, disabled })}>{children}</span>}
  </label>
);
InputCheckbox.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
InputCheckbox.defaultProps = {
  children: '',
  value: false,
  disabled: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};
