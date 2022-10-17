import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ClipboardText, Note, PlusCircle } from 'phosphor-react'
import styles from './TasksList.module.css'
import Tasks from './Tasks'
import { v4 } from 'uuid';

export default function TasksList() {

  const [tasks, setTasks] = useState([{
    id: v4(),
    note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid tenetur libero unde nostrum laudantium, reprehenderit qui voluptate mollitia sapiente numquam modi ratione sunt, atque aut asperiores, aperiam aspernatur iusto!",
    isComplete: false
  },
  {
    id: v4(),
    note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ratione!",
    isComplete: false
  },])
  console.log(tasks)

  const [newTask, setNewTask] = useState([])

  function handleCreateNewTasks(event) {
    event.preventDefault();
    console.log(event.target.innerText)
    setNewTask({
      id: v4(),
      note: event.target.innerText,
      isComplete: false
    })
    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTasks} className={styles.form}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type="submit" >Criar <PlusCircle size={16} /> </button>
      </form>

      <div className={styles.status}>
        <p className={styles.created}>Tarefas criadas<span>0</span></p>
        <p className={styles.concluded}>Concluidas<span>0</span></p>
      </div>

      <div className={styles.tasks}>
        {tasks.map((task) => {
          return (
            <div>
              <Tasks
                key={task.id}
                id={task.id}
                note={task.note}
                isComplete={task.isComplete}
              />
            </div>
          )
        })}

        {/* <div className={styles.empty}>
          <ClipboardText className={styles.clipboard} size={64} />
          <p>Você ainda não tem tarefas cadastradas <span>Crie tarefas e organize seus itens a fazer</span></p>
        </div> */}

      </div>
    </div>
  )
}
