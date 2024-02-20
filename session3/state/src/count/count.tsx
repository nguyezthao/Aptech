import { useState } from 'react'
import React from 'react'
import styles from './state.module.css'
type Props = {}

export default function Index({ }: Props) {
  const [count, setCount] = React.useState(0);
  return (
    <div className={styles.container}>
      <button onClick={() => {
        setCount(count - 1);
      }}
      >
        giảm
      </button>
      <strong>  {count}</strong>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        tăng
      </button>
    </div>
  )
}