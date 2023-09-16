import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
// can use "-" post-item
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                  <img src={images.logo} alt="TikTok" />
                </div>
                {/* search */}
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}/>
                    <button className={cx('clear')}>
                        {/* add clear */}
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>

                    {/* loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>

                    <button className={cx('search-btn')}>
                        {/* search icon */} 
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
                <div className={cx('action')}>
                
                </div>
            </div>
           
        </header>
    )
}

export default Header;