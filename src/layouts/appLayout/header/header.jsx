import classNames from 'classnames/bind';
import styles from './header.scss';

const cx = classNames.bind(styles);

export const Header = () => <div className={cx('header')}>header</div>;
