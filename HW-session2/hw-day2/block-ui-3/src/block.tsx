import React from 'react'
import styles from './block.module.css'

type Props = {
    imgUrl?: string;
    title?: string;
    subTitle?: string;
    color?: string;
}


export default function block({ imgUrl = '/640px-Facebook-icon-1-removebg-preview.png', title, subTitle, color }: Props) {
    return (
        <div className={styles.body}>
            <div className={styles.container} style={{ backgroundColor: color }}>
                <div className={styles.child1}>
                    <div className={styles.item1}>
                        <img src={imgUrl}></img>
                    </div>
                </div>
                <div className={styles.child2}>
                    <div className={styles.item2}>
                        {title}
                    </div>
                    <div className={styles.item3}>
                        {subTitle}
                    </div>
                </div>

            </div>
        </div>
    )
}