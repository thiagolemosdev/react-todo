import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ClipboardText, Note, PlusCircle } from "phosphor-react";
import styles from "./TasksList.module.css";
import Tasks from "./Tasks";
import { v4 } from "uuid";

export default function TasksList() {

  let input
  function handleNewTaskChange(event) {
    event.preventDefault();

    input = event.target.value
  }

  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState([]);

  function handleCreateNewTasks(event) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: v4(),
        note: input,
        isComplete: false,
      },
    ]);
  }

  function completeTask() {

  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  if (tasks.length <= 0) {
    return (

      <div>
        <form onSubmit={handleCreateNewTasks} className={styles.form}>
          <input onChange={handleNewTaskChange} type="text" placeholder='Adicione uma nova tarefa' />
          <button onClick={handleCreateNewTasks} >Criar <PlusCircle size={16} /> </button>
        </form>

        <div className={styles.status}>
          <p className={styles.created}>
            Tarefas criadas<span>0</span>
          </p>
          <p className={styles.concluded}>
            Concluidas<span>0</span>
          </p>
        </div>

        <div className={styles.tasks}>
          <div className={styles.empty}>
            <ClipboardText className={styles.clipboard} size={64} />
            <p>Você ainda não tem tarefas cadastradas <span>Crie tarefas e organize seus itens a fazer</span></p>
          </div>
        </div>
      </div>
    );

  } else {
    return (
      <div>
        <form onSubmit={handleCreateNewTasks} className={styles.form}>
          <input onChange={handleNewTaskChange} type="text" placeholder='Adicione uma nova tarefa' />
          <button onClick={handleCreateNewTasks} >Criar <PlusCircle size={16} /> </button>
        </form>

        <div className={styles.status}>
          <p className={styles.created}>
            Tarefas criadas<span>{tasks.length}</span>
          </p>
          <p className={styles.concluded}>
            Concluidas<span>0</span>
          </p>
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
                  onCompleteTask={completeTask}
                  onDeleteTask={deleteTask}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
