import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import {Wrapper as PopperWapper } from '~/components/Popper'
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
 
const cx = classNames.bind(styles);
const defaultFn = () => {}
function Menu({children, items = [], onChange = defaultFn}) {
    
    const [history, setHistory] = useState([
        // object dưới đây sẽ đại diện cho trang hiện tại
        {
            data: items,
        }
    ]);

    // lấy trang 1
    const current = history[history.length -1];

    // this function will get data from array items
    const renderItems = () => {
        return current.data.map((item, index) => {
            // kiểm tra phần nào sẽ có con
            const isParent = !!item.children; // convet item from children 
            // có children --> true
            // không có children --> undefined

            return <MenuItem key = {index} data={item} onClick= {() => {
                if(isParent) {
                    // console.log(item.children);
                    // push new values
                    setHistory((prev) => (
                        [...prev, item.children]
                    ));
                }
                else {
                    onChange(item)
                }
            }}/>
        })
    }

    return ( 
        <Tippy
            interactive
            // visible // show menu

            // căn chỉnh lại vị trí cho pop menu
            placement='bottom-end'
            // khi show thì show luôn
            // khi ẩn thì sau 0.5s sẽ ẩn đi
            // deplay = {[0, 2000]} 
            render = {(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWapper className={cx('menu-popper')}>
                        {/* có từ 2 items trong mảng trở lên thì hiện lên */}

                        {history.length > 1 && <HeaderMenu title='Languages'
                            onBack = {() => {
                                // current lấy phần tử cuối 
                                // --> trừ đi 1 thì sẽ giảm đi 1 cấp
                                setHistory(prev => prev.slice(0, prev.length-1));
                            }}
                        />}
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