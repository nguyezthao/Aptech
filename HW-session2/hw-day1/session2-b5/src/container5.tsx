import React from 'react'
import styles from './container5.module.css'

type Props = {}

export default function container5({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.child}>
                <div className={styles.item1}>
                    <div className={styles.item1_1}>
                        Jun
                    </div>
                    <div className={styles.item1_2}>
                        23
                    </div>
                </div>
                <div className={styles.item2}>
                </div>
                <div className={styles.item3}>
                    <div className={styles.item3_1}>
                        Wednesday
                    </div>
                    <div className={styles.item3_2}>
                        08:00 PM - 18:30 PM
                    </div>

                </div>
            </div>
        </div>
    )
}