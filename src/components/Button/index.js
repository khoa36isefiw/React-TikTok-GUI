import {Link} from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles);
function Button({to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    medium = false,
    rounded = false,
    large = false,
    disabled = false,
    text = false,
    leftIcon,
    rightIcon,
    className,
    ...passProps}) {
    // cơ chế thay đổi thẻ a hoặc button
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,

    }

    if(to) {
        // Link nội bộ dùng Link của react-router-dom
        _props.to = to;
        Comp = Link;
    }
    else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    // khi button mà có disabled --> loại bỏ luôn cái onClick 
    //  không cho xài onClick nữa
    // Remove event listeners when button is disabled   
    if(disabled) {
        // delete _props.onClick;
        Object.keys(_props).forEach(key => {
            // console.log(key);
            // check, nếu mà start with "on" và kiểu của nó là 1 hàm -> delete props đó
            if(key.startsWith("on") && typeof _props[key] ==="function" ) {
                delete _props[key];
            }
        })
    }

    const classes = cx('wrapper', {
        // if it's true --> we have this class
        primary: primary, 
        outline: outline,
        medium: medium, 
        large: large,
        text: text, 
        disabled: disabled,
        rounded: rounded,
        // khi có className thì lấy giá trị 
        //của class name đó làm key
        [className]: className,
        leftIcon: leftIcon,
        

    });
    return ( 
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;