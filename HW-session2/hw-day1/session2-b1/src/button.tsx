import React from 'react'
import styles from './iconButton.module.css'

type Props = {
  text?: string; // optional
  iconLeft?: React.ReactNode; // optional
  iconRight?: React.ReactNode; // optional
  color1?: string;
  color2?: string;

}

export default function button({ text, iconLeft, iconRight, color1 = '#000000', color2 = '#000000' }: Props) {
  return (
    <  div className={styles.container} style={{ backgroundColor: color1 }}>
      <div className={styles.buttonText} style={{ color: color2 }}>
        {iconLeft && <div className={styles.leftIcon}>{iconLeft}</div>}
        <div style={{ flex: 1 }}  >{text}</div>
        {iconRight && <div className={styles.rightIcon}>{iconRight}</div>}
      </div>
    </div>
  )
}