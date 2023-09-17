// Default Layout have 2 Section: Header and SideBar
import Header from "../components/Header"; // use header in components
import styles from  './DefaultLayout.module.scss'
import classNames from "classnames/bind";
import SideBar from "./Sidebar";

const cx = classNames.bind(styles);
function DefaultLayout({children}) {
    return (
        // Contains all the layout of the current website 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx("container")}>
                <SideBar />
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;