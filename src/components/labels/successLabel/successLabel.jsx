import { FormattedMessage } from 'react-intl';
import CheckMarkIcon from 'common/img/icon-check-mark-inline.svg';
import classNames from 'classnames/bind';
import Parser from 'html-react-parser';
import styles from './successLabel.scss';

const cx = classNames.bind(styles);

export const SuccessLabel = () => (
  <span className={cx('success-label')}>
    <i className={cx('icon')}>{Parser(CheckMarkIcon)}</i>
    <FormattedMessage id={'SuccessLabel.text'} defaultMessage={'Success'} />
  </span>
);
