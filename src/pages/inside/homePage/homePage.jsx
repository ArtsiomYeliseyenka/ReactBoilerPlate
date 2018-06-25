import classNames from 'classnames/bind';
import styles from './homePage.scss';

const cx = classNames.bind(styles);
export const HomePage = () => <div className={cx('home-page')}>HELLO WORLD!</div>;
