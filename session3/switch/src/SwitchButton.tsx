import React from 'react'
import styles from './SwitchButton.module.css'
import classnames from 'classnames';

type Props = {}
export default function SwitchButton() {
    const [status, setStatus] = React.useState<'on' | 'off'>('on');

    const toggleSwitch = () => {
        setStatus(status === 'on' ? 'off' : 'on'); // toán tử ba ngôi
    };

    return (
        <div className={classnames(styles.container, status === 'on' ? styles.on : styles.off)} onClick={toggleSwitch}>
            <div className={classnames(styles.button, status === 'on' ? styles.on : styles.off)}></div>
        </div>
    );
    // return (
    //   <div className={[styles.container, styles.on].join(' ')} onClick={toggleSwitch}>
    //     <div className={classnames(styles.button, status === 'on' ? styles.on : styles.off)}></div>
    //   </div>
    // );
    // nếu dùng 2 class css cho 1 div thì cài thêm packet classnames
}