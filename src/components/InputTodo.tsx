import React from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './InputTodo.module.css'

export default function InputTodo() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button >Criar <PlusCircle size={16} /> </button>
    </form>
  )
}
