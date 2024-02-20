import React from 'react'
import styles from './basic-1.module.css'

type Props = {
  title?: string;
  subTitle?: string;
}

export default function basic({ title, subTitle }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.child1}>
        <img src='/img/20220514_SNyW5NxiPa0dPihEpckotfko.jpg'></img>
      </div>
      <div className={styles.child2}>
        <div className={styles.item1}>
          <div className={styles.content}>
            {title = 'Clothing & apparel'}
          </div>
        </div>
        <div className={styles.item2}>
          <div className={styles.content}>
            {subTitle = 'Accessories'}<br />
            {subTitle = 'Bags'}<br />
            {subTitle = 'Kid Fashon'}<br />
            {subTitle = 'Mens'}<br />
          </div>

        </div>
      </div>
    </div>
  )
}