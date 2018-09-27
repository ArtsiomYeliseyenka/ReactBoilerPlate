import { FormattedMessage } from 'react-intl';
import WarningIcon from 'common/img/icon-warning-inline.svg';
import classNames from 'classnames/bind';
import Parser from 'html-react-parser';
import styles from './errorLabel.scss';

const cx = classNames.bind(styles);

export const ErrorLabel = () => (
  <span className={cx('error-label')}>
    <i className={cx('icon')}>{Parser(WarningIcon)}</i>
    <FormattedMessage id={'ErrorLabel.text'} defaultMessage={'Error'} />
  </span>
);
