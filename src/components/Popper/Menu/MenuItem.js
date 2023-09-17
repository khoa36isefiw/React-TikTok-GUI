import Button from '~/components/Button'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles);
// props is data
function MenuItem({data, onClick}) {
    return (  
        <Button 
            className = {cx('menu-item')}
            leftIcon={data.icon}
            to={data.to}
            onClick= {onClick}
        >
            {/* convert to String */}
            {/* {JSON.stringify(data)    } */}
            
            {data.title}
        </Button>
    );
}

export default MenuItem;