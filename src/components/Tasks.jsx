import React from "react";
import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export default function Tasks({ id, note, isComplete, onDeleteTask, onCompleteTask }) {

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div>
      <div className={styles.task}>
        <input type="checkbox" name={`checkbox-${id}`} id={`checkbox-${id}`} />
        <label htmlFor={`checkbox-${id}`}>{note}</label>
        <Trash onClick={handleDeleteTask} className={styles.trash} size={32} />
      </div>
    </div>
  );
}
