import React from 'react'
import styles from './container2.module.css'

type Props = {
    icon?: React.ReactNode;
}

export default function container({ icon }: Props) {
    return (
        <div className={styles.container1}>
            <div className={styles.child1}>
                <div className={styles.item1}>
                    <div className={styles.icon1}>
                        <img src='/manchester-united-logo-svgrepo-com 1.svg'></img>
                    </div>
                    <div className={styles.icon2}>
                        Manchester United
                    </div>
                </div>


                <div className={styles.item2}>
                    <div className={styles.icon3}>
                        {icon}

                    </div>


                </div>

            </div>
        </div>
    )
}