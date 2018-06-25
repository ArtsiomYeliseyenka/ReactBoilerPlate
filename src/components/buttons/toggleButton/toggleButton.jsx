import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './toggleButton.scss';

const cx = classNames.bind(styles);

export const ToggleButton = ({ items, value, onClickItem }) => (
  <div className={cx('toggle-button')}>
    {items.map((item) => (
      <div
        key={item.value}
        className={cx({ 'button-item': true, active: item.value === value })}
        style={{ width: `${100 / items.length}%` }}
        onClick={() => onClickItem(item.value)}
      >
        <span>{item.label}</span>
      </div>
    ))}
  </div>
);
ToggleButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  value: PropTypes.string,
  onClickItem: PropTypes.func,
};
ToggleButton.defaultProps = {
  items: [],
  value: '',
  onClickItem: () => {},
};
