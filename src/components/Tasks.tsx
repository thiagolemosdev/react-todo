import React from 'react'
import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

export default function Tasks() {
  return (
    <div>
      <div className={styles.task}>
        <input type="checkbox" name="" id="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem unde repellendus in cumque nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ratione?</p>
        <Trash className={styles.trash} size={32} />
      </div>
      <div className={styles.task}>
        <input type="checkbox" name="" id="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem unde repellendus in cumque nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ratione?</p>
        <Trash className={styles.trash} size={32} />
      </div>
      <div className={styles.task}>
        <input type="checkbox" name="" id="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem unde repellendus in cumque nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ratione?</p>
        <Trash className={styles.trash} size={32} />
      </div>
    </div>
  )
}
