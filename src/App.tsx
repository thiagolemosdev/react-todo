import Header from './components/Header'

import styles from './App.module.css'
import './global.css'
import TasksList from './components/TasksList'
import { v4 } from 'uuid';


const tasks = []

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <TasksList task={tasks} />
        </main>
      </div>
    </>
  )
}

export default App
