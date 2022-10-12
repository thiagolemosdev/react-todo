import React from 'react'
import { ClipboardText } from 'phosphor-react'
import styles from './TasksList.module.css'
import Tasks from './Tasks'

export default function TasksList() {
  return (
    <div>
      <div className={styles.status}>
        <p className={styles.created}>Tarefas criadas<span>0</span></p>
        <p className={styles.concluded}>Concluidas<span>0</span></p>
      </div>
      <div className={styles.tasks}>
        {/* <div className={styles.empty}>
          <ClipboardText className={styles.clipboard} size={64} />
          <p>Você ainda não tem tarefas cadastradas <span>Crie tarefas e organize seus itens a fazer</span></p>
        </div> */}

        <div>
          <Tasks />
        </div>

      </div>
    </div>
  )
}
