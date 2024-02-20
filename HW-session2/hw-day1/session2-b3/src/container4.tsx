import React from 'react'
import styles from './container4.module.css'

type Props = {
    icon?: React.ReactNode;
}

export default function container4({ icon }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.child1}>
                    <div className={styles.item1}>Highlight
                    </div>
                    <div className={styles.item2}>Feeds
                    </div>
                    <div className={styles.item3}>{icon}
                    </div>
                </div>
                <div className={styles.child2}>
                    <div className={styles.item4}>
                        <div className={styles.subItem1}>
                            Dashboard
                        </div>
                        <div className={styles.subItem2}>
                            Business management service
                        </div>
                    </div>
                    <div className={styles.item5}>
                        <div className={styles.subItem3}>
                            <div className={styles.subItem4}>

                            </div>
                        </div>
                        <div className={styles.subItem5}>
                            80%

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}