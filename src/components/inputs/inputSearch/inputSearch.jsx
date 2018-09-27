import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Parser from 'html-react-parser';
import styles from './inputSearch.scss';
import SearchIcon from './img/search-icon-inline.svg';

const cx = classNames.bind(styles);

export const InputSearch = ({
  type,
  value,
  error,
  placeholder,
  maxLength,
  disabled,
  refFunction,
  onChange,
  onFocus,
  onBlur,
  onKeyUp,
  active,
}) => (
  <div className={cx('input-search', { error, active, disabled })}>
    <input
      ref={refFunction}
      type={type}
      className={cx('input')}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
    />
    <div className={cx('icon')}>{Parser(SearchIcon)}</div>
  </div>
);

InputSearch.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  refFunction: PropTypes.func,
};

InputSearch.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  maxLength: '254',
  active: false,
  disabled: false,
  error: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onKeyUp: () => {},
  refFunction: () => {},
};
