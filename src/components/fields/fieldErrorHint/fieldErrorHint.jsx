import { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import styles from './fieldErrorHint.scss';

const cx = classNames.bind(styles);

const messages = defineMessages({
  loginHint: {
    id: 'Validation.loginHint',
    defaultMessage:
      'Login should have size from 1 to 128 symbols, latin, numeric characters, hyphen, underscore, dot.',
  },
  nameHint: {
    id: 'Validation.nameHint',
    defaultMessage:
      'Full name should have size from 3 to 256 symbols, latin, cyrillic, numeric characters, hyphen, underscore, dot, space.',
  },
  passwordHint: {
    id: 'Validation.passwordHint',
    defaultMessage: 'Password should have size from 4 to 64 symbols.',
  },
  emailHint: {
    id: 'Validation.validation.email',
    defaultMessage: 'Email is incorrect. Please enter correct email.',
  },
  confirmPasswordHint: {
    id: 'Validation.confirmPasswordHint',
    defaultMessage: 'Passwords do not match.',
  },
  searchHint: {
    id: 'Validation.searchHint',
    defaultMessage: 'Query string should have size from 3 to 128 symbols.',
  },
  pipelineNameRequiredHint: {
    id: 'Validation.pipelineNameRequiredHint',
    defaultMessage: 'Pipeline name is required.',
  },
  pipelineNameLengthHint: {
    id: 'Validation.pipelineNameLengthHint',
    defaultMessage: 'Pipeline name should have size from 3 to 128 symbols.',
  },
  pipelineNameAsyncHint: {
    id: 'Validation.pipelineNameAsyncHint',
    defaultMessage: 'Pipeline current name already exists.',
  },
  sourceDataNameHint: {
    id: 'Validation.sourceDataNameHint',
    defaultMessage: 'Source data name should have size from 3 to 128 symbols.',
  },
  targetNameHint: {
    id: 'Validation.targetNameHint',
    defaultMessage: 'Target name should have size from 3 to 128 symbols.',
  },
  descriptionHint: {
    id: 'Validation.descriptionHint',
    defaultMessage: 'Description max length is 1024 symbols.',
  },
  connectionStringHint: {
    id: 'Validation.connectionStringHint',
    defaultMessage: 'Connection string should be a valid address.',
  },
  schemeNameHint: {
    id: 'Validation.schemeNameHint',
    defaultMessage: 'Scheme name should have size from 3 to 128 symbols.',
  },
});

@injectIntl
export class FieldErrorHint extends PureComponent {
  static propTypes = {
    hintType: PropTypes.string,
    children: PropTypes.node,
    intl: intlShape.isRequired,
    error: PropTypes.string,
    active: PropTypes.bool,
  };
  static defaultProps = {
    hintType: 'bottom',
    children: null,
    error: '',
    active: false,
  };
  render() {
    const { hintType, children, intl, error, active, ...rest } = this.props;
    const classes = cx({
      'field-error-hint': true,
      show: error && active,
      'bottom-type': hintType === 'bottom',
    });
    return (
      <div className={classes}>
        {children && cloneElement(children, { error, active, ...rest })}
        <div className={cx('hint')}>
          <div className={cx('hint-content')}>
            {error && messages[error] ? intl.formatMessage(messages[error]) : error}
          </div>
        </div>
      </div>
    );
  }
}
