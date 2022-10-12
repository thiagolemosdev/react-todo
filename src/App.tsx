import Header from './components/Header'
import InputTodo from './components/InputTodo'

import styles from './App.module.css'
import './global.css'
import Tasks from './components/TasksList'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div>
          <InputTodo />
        </div>
        <main>
          <Tasks />
        </main>
      </div>
    </>
  )
}

export default App
