import React from 'react'
import styles from './session.module.css'
type Props = {
  iconRight?: React.ReactNode;
}

export default function session({ iconRight }: Props) {
  return (

    <div className={styles.container}>
      <div className={styles.child1}>
        <div className={styles.item1}>7'</div>
        {iconRight && <div className={styles.item2}>{iconRight}</div>}
      </div>
      <div className={styles.child2}>
        <div className={styles.item3}>
          <div className={styles.childItem1}>
            Spain
          </div>
          <div className={styles.childItem2}>
            <div className={styles.avatar}>
              <img src='https://www.svgrepo.com/show/401571/flag-for-ceuta-and-melilla.svg' />
            </div>
          </div>
        </div>
        <div className={styles.item4}>
          <div className={styles.child3}>
            0 : 0
          </div>
        </div>
        <div className={styles.item3}>

          <div className={styles.childItem2}>
            <div className={styles.avatar}>
              <img src='https://em-content.zobj.net/source/emojione/151/flag-for-france_1f1eb-1f1f7.png' />
            </div>
          </div>
          <div className={styles.childItem1}>
            France
          </div>

        </div>

      </div>

    </div>




  )
}