import React from 'react'
import styles from './basic2.module.css'
type Props = {
    color?: string;
    stars?: number;
}

export default function basic3({ color = '#d14c4c', stars = 0 }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.child1}>
                <img src='/png-transparent-chromecast-4k-resolution-ultra-high-definition-television-smart-tv-tivi-television-rectangle-display-advertising-removebg-preview.png'></img>
                <div className={styles.child2} style={{ color: color = '#c7b9b9' }}>YOUNG SHOP</div>
                <div className={styles.child3} style={{ color: color = '#628cc8' }}>Samsung UHD TV 24inch</div>
                <div className={styles.child4}>
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <span key={index} style={{ color: stars >= item ? 'orange' : 'gray' }}>
                                ★
                            </span>
                        );
                    })} 02
                </div>
                <div className={styles.child4} style={{ color: color = '#524e4e' }}>
                    $599
                </div>

            </div>
        </div >
    )
}