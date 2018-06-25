import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './inputBigSwitcher.scss';

const cx = classNames.bind(styles);

export const InputBigSwitcher = ({ children, disabled, value, onChange, onFocus, onBlur }) => {
  const classes = cx({
    'switcher-wrapper': true,
    disabled,
  });
  const sliderClasses = cx({
    slider: true,
    'turned-on': !!value,
  });
  const handlerOnChange = (e) => {
    onChange(e.target.checked);
  };
  return (
    <label className={cx('input-big-switcher')} tabIndex="1">
      <div className={classes}>
        <div className={cx('on')}>
          <FormattedMessage id={'Common.on'} defaultMessage={'ON'} />
        </div>
        <div className={cx('off')}>
          <FormattedMessage id={'Common.off'} defaultMessage={'OFF'} />
        </div>
        <input
          className={cx('input')}
          type="checkbox"
          disabled={disabled}
          onFocus={onFocus}
          onChange={handlerOnChange}
          onBlur={onBlur}
        />
        <div className={sliderClasses} />
      </div>
      <span className={cx('children-container')}>{children}</span>
    </label>
  );
};

InputBigSwitcher.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

InputBigSwitcher.defaultProps = {
  children: '',
  value: false,
  disabled: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};
