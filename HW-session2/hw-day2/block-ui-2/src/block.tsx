import React from 'react'
import styles from './block.module.css'

type Props = {
    text?: string;
    icon?: React.ReactNode;
    color?: string;
    width1?: number;

}

export default function block({ text, icon, color, width1 }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.child1} style={{ backgroundColor: color }}>
                {icon}

            </div>
            <div className={styles.child2}>
                {text}

            </div>
            <div className={styles.child3}>
                <div className={styles.child4} style={{ width: width1, backgroundColor: color }} >

                </div>

            </div>
        </div>
    )
}