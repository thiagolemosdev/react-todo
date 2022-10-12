import Header from './components/Header'
import InputTodo from './components/InputTodo'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <InputTodo />
      </div>
    </>
  )
}

export default App
