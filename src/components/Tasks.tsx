import React from 'react'
import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

export default function Tasks() {
  return (
    <div>
      <div className={styles.task}>
        <input type="checkbox" name="checkbox-1" id="checkbox-1" />
        <label htmlFor="checkbox-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem unde repellendus in cumque nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ratione?</label>
        <Trash className={styles.trash} size={32} />
      </div>
      <div className={styles.task}>
        <input type="checkbox" name="checkbox-2" id="checkbox-2" />
        <label htmlFor="checkbox-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem unde repellendus in cumque nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ratione?</label>
        <Trash className={styles.trash} size={32} />
      </div>
      <div className={styles.task}>
        <input type="checkbox" name="checkbox-3" id="checkbox-3" />
        <label htmlFor="checkbox-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem unde repellendus in cumque nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ratione?</label>
        <Trash className={styles.trash} size={32} />
      </div>
    </div>
  )
}
