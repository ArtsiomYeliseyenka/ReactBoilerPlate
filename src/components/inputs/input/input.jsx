import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './input.scss';

const cx = classNames.bind(styles);

export const Input = ({
  type,
  value,
  readonly,
  error,
  placeholder,
  maxLength,
  disabled,
  refFunction,
  onChange,
  onFocus,
  onBlur,
  onKeyUp,
  onKeyPress,
  touched,
}) => (
  <input
    ref={refFunction}
    type={type}
    className={cx('input', { disabled, error, touched, readonly })}
    value={value}
    placeholder={placeholder}
    maxLength={maxLength}
    disabled={disabled}
    readOnly={readonly}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyUp={onKeyUp}
    onKeyPress={onKeyPress}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  refFunction: PropTypes.func,
  touched: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  maxLength: '254',
  disabled: false,
  readonly: false,
  error: '',
  touched: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onKeyUp: () => {},
  onKeyPress: () => {},
  refFunction: () => {},
};
