import React, { Component } from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './inputOutside.scss';

const cx = classNames.bind(styles);

export class InputOutside extends Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    refFunction: PropTypes.func,
    active: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,
  };
  static defaultProps = {
    type: 'text',
    value: '',
    icon: '',
    placeholder: '',
    maxLength: '254',
    disabled: false,
    readonly: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyUp: () => {},
    refFunction: () => {},
    active: false,
    touched: false,
    error: '',
  };

  state = {
    passwordVisible: false,
  };
  getInputType = () => {
    if (this.props.type !== 'password') {
      return this.props.type;
    }
    return this.state.passwordVisible ? 'text' : 'password';
  };
  showPassword = (e) => {
    e.preventDefault();
    !this.state.passwordVisible && this.setState({ passwordVisible: true });
  };
  hidePassword = (e) => {
    e.preventDefault();
    this.state.passwordVisible && this.setState({ passwordVisible: false });
  };
  render() {
    const {
      type,
      value,
      readonly,
      icon,
      placeholder,
      maxLength,
      disabled,
      refFunction,
      onChange,
      onFocus,
      onBlur,
      onKeyUp,
      error,
      active,
      touched,
    } = this.props;
    return (
      <div
        className={cx('input-outside', {
          disabled,
          password: type === 'password',
          invalid: error && (active || touched),
        })}
      >
        <div className={cx('icon')}>{Parser(icon)}</div>
        <input
          ref={refFunction}
          className={cx('input')}
          type={this.getInputType()}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readonly}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
        />
        {type === 'password' && (
          <div
            className={cx('eye-icon', { opened: this.state.passwordVisible })}
            onMouseDown={this.showPassword}
            onMouseLeave={this.hidePassword}
            onMouseUp={this.hidePassword}
            onTouchStart={this.showPassword}
            onTouchEnd={this.hidePassword}
            onTouchCancel={this.hidePassword}
          />
        )}
      </div>
    );
  }
}
