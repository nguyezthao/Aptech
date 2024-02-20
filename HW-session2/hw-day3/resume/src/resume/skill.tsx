import React from 'react'
import styles from './skill.module.css'

type Props = {

}

export default function skill({ }: Props) {
    const items = [
        {
            title: 'HTML',
            widths: 200,
        },
        {
            title: 'CSS',
            widths: 180,
        },
        {
            title: 'JAVASCRIPT',
            widths: 150,
        },
        {
            title: 'REACT',
            widths: 100,
        },
        {
            title: 'C/C++',
            widths: 100,
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.skill}>SKILL</div>
            <div className={styles.child}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item1}>
                        <div className={styles.childItem1} style={{ width: item.widths + 'px' }} >{item.title}</div>
                    </div>

                ))}


            </div>
        </div>

    )
}