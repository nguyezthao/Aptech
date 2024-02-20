import React from 'react'
import styles from './block.module.css'
type Props = {
  title?: string;
  subTitle?: number;
  colorDark?: string;
  colorHight?: string;

}

export default function Block({ title, subTitle, colorDark = '#a13f3f', colorHight = '#156496' }: Props) {
  return (
    <div className={styles.container} >
      <div className={styles.child1} style={{ backgroundColor: colorDark }}>
        <div className={styles.content1}>{title}</div>
      </div>
      <div className={styles.child2} style={{ width: subTitle + '%', backgroundColor: colorHight }}>
        <div className={styles.content2}>{subTitle}% </div>
      </div>
    </div>
  )
}