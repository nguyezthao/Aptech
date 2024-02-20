import React from 'react'
import styles from './check.module.css'
import { BsCheckLg } from 'react-icons/bs';
import classnames from 'classnames';


type Props = {}

export default function Check({ }: Props) {
    const [status, setStatus] = React.useState<'on' | 'off'>('on');

    const toggleSwitch = () => {
        setStatus(status === 'on' ? 'off' : 'on'); // toán tử ba ngôi kiểm trả trạng thái nếu là on thì trạng thái tiếp theo sẽ off và ngược lại
    };

    return (
        <div className={classnames(styles.container, status === 'on' ? styles.on : styles.off)} onClick={toggleSwitch}>
            <div className={classnames(styles.button, status === 'on' ? styles.on : styles.off)}>
                <BsCheckLg className={styles.icon} />
            </div>
        </div>
    );
}