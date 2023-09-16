import classNames from 'classnames/bind';
import styles from './Header.module.scss'

// can use "-" post-item
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}

                {/* search */}
            </div>
        </header>
    )
}

export default Header;