import {useState, useEffect} from 'react'
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import {Wrapper as PopperWapper} from '~/components/Popper'
import styles from './Header.module.scss'
import images from '~/assets/images';
import AccountItem from '../AccountItem';
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu';


// can use "-" post-item
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feeback and Help', 
        to: '/feedback'
    }, 
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>, 
        title: 'Keyboard shortcuts'
    }
]; 
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    // Fake API after 3 seconds have some result 
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, []) 

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                  <img src={images.logo} alt="TikTok" />
                </div>

                {/* search */}

                <Tippy 
                    // select/ interact with the result: 
                    interactive 

                    // if the length of search input > 0 --> show result
                    visible = {searchResult.length > 0}
                    // content="Tìm kiếm"
                    render = {(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWapper>
                                <h4 className={cx('search-title')}>
                                    Accounts 
                                </h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false}/>
                        <button className={cx('clear')}>
                            {/* add clear */}
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>

                        {/* loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>

                        {/* Make pop up "Tool tip" */}
                    
                            <button className={cx('search-btn')}>
                                {/* search icon */} 
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </button>
                    </div>
                </Tippy>

                <div className={cx('action')}>
                    {/* add props primary */}
                    <Button text>Upload</Button>
                    {/* <Button outline rounded>Outline</Button>
                    <Button primary rounded >Get app</Button> */}
                    {/* ngăn chặn onClick */}
                    {/* <Button primary disabled onClick= {() => alert('hello')}>Log in</Button> */}
                    {/* <Button outline className={cx('custom-login')}>Customize</Button> */}
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn}/>}
                    >
                        Login
                    </Button>

                    {/* More features */}
                    <Menu
                        // get the array
                        items={MENU_ITEMS}
                    >
                         
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </Menu>
                    
                </div>

            </div>
           
        </header>
    )
}

export default Header;

