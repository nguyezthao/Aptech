import React from 'react'
import styles from './container3.module.css'

type Props = {}

export default function container3({ }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.child1}>
                <div className={styles.item1}>
                    <img src='/avatar.png'></img>
                </div>
                <div className={styles.item2}>
                    <div className={styles.title}>
                        Wade Warren
                    </div>
                    <div className={styles.subTitle}>
                        <div className={styles.subTitle1}>
                            <div className={styles.icon1}>
                                <img src='/visa.svg'></img>
                            </div>
                            <div className={styles.icon2}>
                                4293 3242 ••••
                            </div>
                        </div>
                        <div className={styles.subTitle2}>
                            <img src='/Vector.svg'></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}