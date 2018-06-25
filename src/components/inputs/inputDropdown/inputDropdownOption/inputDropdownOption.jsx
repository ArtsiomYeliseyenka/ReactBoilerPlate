import { InputCheckbox } from 'components/inputs/inputCheckbox';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './inputDropdownOption.scss';

const cx = classNames.bind(styles);

export const DropdownOption = ({
  multiple,
  label,
  disabled,
  selected,
  subOption,
  onChange,
  value,
}) => {
  const onChangeHandler = () => {
    onChange(value);
  };
  return (
    <div
      className={cx('dropdown-option', {
        selected: !multiple && selected,
        disabled,
        'sub-option': subOption,
      })}
    >
      {multiple ? (
        <InputCheckbox value={selected} disabled={disabled} onChange={onChangeHandler}>
          <span className={cx('option-label')}>{label}</span>
        </InputCheckbox>
      ) : (
        <div className={cx('single-option')} onClick={onChangeHandler}>
          {label}
        </div>
      )}
    </div>
  );
};

DropdownOption.propTypes = {
  value: PropTypes.string,
  multiple: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  subOption: PropTypes.bool,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

DropdownOption.defaultProps = {
  value: '',
  multiple: false,
  label: '',
  disabled: false,
  subOption: false,
  selected: false,
  onChange: () => {},
};
