import React from 'react'
import styles from './search.module.css'

type Props = {
    iconRight?: React.ReactNode;
    text?: string;
    iconLeft?: React.ReactNode;
    color1?: string;
}

export default function search({ iconRight, text, iconLeft, color1 }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.childContainer}>
                {iconLeft && <div className={styles.leftIcon}>{iconLeft}</div>}
                <div className={styles.textSearch}> {text}  </div>
            </div>
            <div className={styles.right}>
                {iconRight && <div className={styles.rightIcon} style={{ backgroundColor: color1 }}>{iconRight}</div>}
            </div>
        </div>
    )
}