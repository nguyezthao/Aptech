import React from 'react'
import styles from './container2.module.css'

type Props = {
    color1?: string;
}

export default function container2({ color1 }: Props) {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.child} >
                    <div className={styles.item}>
                        <div className={styles.item1}>
                            <img src='/1.png'></img>
                        </div>
                        <div className={styles.item2}>
                            Mon

                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item1}>
                            <img src='/2.png'></img>
                        </div>
                        <div className={styles.item2}>
                            Tue
                        </div>
                    </div>
                    <div className={styles.item} style={{ backgroundColor: color1 }}>
                        <div className={styles.item1}>
                            <img src='/3.png'></img>
                        </div>
                        <div className={styles.item2}>
                            Wed
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item1}>
                            <img src='/4.png'></img>
                        </div>
                        <div className={styles.item2}>
                            Thu
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item1}>
                            <img src='/5.png'></img>
                        </div>
                        <div className={styles.item2}>
                            Fri
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}