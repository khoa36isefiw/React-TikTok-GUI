import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import {Wrapper as PopperWapper } from '~/components/Popper'
import MenuItem from "./MenuItem";
 
const cx = classNames.bind(styles);

function Menu({children, items = []}) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key = {index} data={item}/>
        ))
    }

    return ( 
        <Tippy
            interactive
             // căn chỉnh lại vị trí cho pop menu
            placement='bottom-end'
            // khi show thì show luôn
            // khi ẩn thì sau 0.5s sẽ ẩn đi
            deplay = {[0, 2000]} 
            render = {(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWapper className={cx('menu-popper')}>
                       {renderItems() }
                    </PopperWapper>
                </div>   
            )}
        >
            {children}

        </Tippy>
    );
}

export default Menu;