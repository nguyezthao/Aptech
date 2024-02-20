import React from 'react'
import styles from './container3.module.css'

type Props = {}

export default function container3({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.child}>
                <div className={styles.item1}>
                    <div className={styles.item1_1}>
                        Seatle
                    </div>
                    <div className={styles.item1_2}>
                        Cloudy
                    </div>
                </div>
                <div className={styles.item2}>
                    32°
                </div>
                <div className={styles.item3}>
                    <img src='/twemoji_sun-behind-cloud.png'></img>

                </div>

            </div>
        </div>
    )
}