import React from 'react'
import styles from './container4.module.css'
import { useState } from 'react'

type Props = {
    imgSrc?: string;
    stars?: number;
}

export default function Container4({ stars = 0 }: Props) {
    const imageUrls = [
        '/1.png',
        '/2.png',
        '/3.png',
        '/4.png',
        '/5.png',
    ]
    const day = [
        'Mon',
        'Tue',
        'Web',
        'Thu',
        'Fre',
    ]
    const clock = [
        '02:27 PM',
        '06:00 PM',
        '07:30 PM',
        '12:00 PM',
        '02:27 PM',
    ]
    const divData = [1, 2, 3, 4, 5]
    return (
        <div className={styles.container}>
            <div className={styles.child1}>
                <div className={styles.item1}>
                    Great day to schedule
                </div>
                <div className={styles.item2}>
                    Your usual hours
                </div>
            </div>
            <div className={styles.child2}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className={styles.item3}>
                        < div className={styles.i1}>
                            <img src={imageUrls[index]} alt={`Image ${index}`} />
                        </div>
                        <div className={styles.i2}>
                            <div className={styles.i3}>{day[index]}</div>
                            <div className={styles.i4}>{clock[index]}</div>

                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}