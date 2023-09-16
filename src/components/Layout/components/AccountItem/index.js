import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://www.biztechcs.com/wp-content/uploads/2023/01/How-Flutter-is-All-Set-to-Redefine-App-Development-Trends-2023-Updated-.png" alt='Flutter'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn B</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck}/>
                </h4>
                <span className={cx('username')}>nguyenvanb</span>
            </div>
        </div>
    );
}

export default AccountItem;