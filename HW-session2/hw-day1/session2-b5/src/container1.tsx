import React from 'react'
import styles from './container1.module.css'
type Props = {
    title1?: string;
    title2?: string;
    imgUrl1?: string;
    imgUrl2?: string;
    icon1?: React.ReactNode;
    color1?: string;
    radius?: number;
    color2?: string;
    color3?: string;
    width1?: number;

}

export default function container1({ width1, title1, title2, imgUrl1, imgUrl2, icon1, color1 = '#000000', color2, color3, radius }: Props) {
    return (
        <div>

            <div className={styles.container1} style={{ backgroundColor: color3 }}>
                <div className={styles.child1} >
                    <div className={styles.child1_1}>
                        <img src={imgUrl1}></img>

                    </div>
                    <div className={styles.child1_2}>
                        <div className={styles.title1} style={{ color: color1 }}> {title1}</div>
                        <div className={styles.title2}  > {title2}</div>

                    </div>
                </div>
                <div className={styles.child2} style={{ borderRadius: radius, backgroundColor: color2, }}>{icon1}
                    <img src={imgUrl2} ></img>

                </div>

            </div>

        </div>


    )
}