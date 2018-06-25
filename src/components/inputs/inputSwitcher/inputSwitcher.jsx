import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './inputSwitcher.scss';

const cx = classNames.bind(styles);

export const InputSwitcher = ({ children, value, onChange, onFocus, onBlur }) => {
  const sliderClasses = cx({
    'switcher-slider': true,
    centered: !children,
    enabled: value,
  });

  return (
    <label className={cx('input-switcher')} onFocus={onFocus} onBlur={onBlur} tabIndex="1">
      <input type="checkbox" className={cx('input')} checked={value} onChange={onChange} />
      <span className={sliderClasses} />
      <span className={cx('children-container')}>{children}</span>
    </label>
  );
};

InputSwitcher.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

InputSwitcher.defaultProps = {
  children: '',
  value: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};
