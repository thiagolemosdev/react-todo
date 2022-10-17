import React from 'react'
import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'

interface Task {
  id: string,
  note: string,
  isComplete: boolean,
}

export default function Tasks({ id, note, isComplete }: Task) {
  return (
    <div>
      <div className={styles.task}>
        <input type="checkbox" name={`checkbox-${id}`} id={`checkbox-${id}`} />
        <label htmlFor={`checkbox-${id}`}>{note}</label>
        <Trash className={styles.trash} size={32} />
      </div>
    </div>
  )
}
