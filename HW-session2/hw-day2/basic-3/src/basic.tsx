import React from 'react'
import styles from './basic.module.css'

type Props = {
    title?: string;
    subTitle1?: string;
    subTitle2?: string;
}

export default function Basic({ title, subTitle1, subTitle2 }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.child1}>
                <img src='/img/Screenshot 2023-10-13 185803.jpg'></img>

            </div>
            <div className={styles.child3}>
                <div className={styles.sub}>
                    {subTitle1 = 'Technology'}
                </div>
                <div className={styles.title}>
                    {title = 'Harman Kadon Onyx Studio Mini'}
                    {title = 'Harman Kadon Onyx Studio Mini'}

                </div>
                <div className={styles.sub}>
                    {subTitle1 = 'Fer 21,2021 by'}  {subTitle2 = 'drfurion'}

                </div>

            </div>

        </div>
    )
}

