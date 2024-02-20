import React from 'react'
import styles from './block.module.css'
type Props = {
    title?: string;
    subTitle?: string;
    subTitle1?: string;

}

export default function block({ title, subTitle, subTitle1 = 'WEB', }: Props) {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.child1}>
                    <div className={styles.item1}>
                        {title}
                    </div>
                    <div className={styles.item2}>{subTitle}</div>
                </div>
                <div className={styles.child2}>
                    <div className={styles.col1}>
                    </div>
                    <div className={styles.subcol1} >
                    </div>
                    <div className={styles.subTitle1}>{subTitle1 = 'MON'}</div>
                    <div className={styles.col2}>
                    </div>
                    <div className={styles.subcol2} >
                    </div>
                    <div className={styles.subTitle2}>{subTitle1 = 'TUE'}</div>
                    <div className={styles.col3}>
                    </div>
                    <div className={styles.subcol3} >
                    </div>
                    <div className={styles.subTitle3}>{subTitle1 = 'WEB'}</div>
                    <div className={styles.col4}>

                    </div>
                    <div className={styles.subcol4} >
                    </div>
                    <div className={styles.subTitle4}>{subTitle1 = 'THU'}</div>
                    <div className={styles.col5}>

                    </div>
                    <div className={styles.subcol5} >
                    </div>
                    <div className={styles.subTitle5}>{subTitle1 = 'FRI'}</div>




                </div>
            </div>
        </div>
    )
}