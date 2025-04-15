import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskList } from "./components/TaskList";

function App() {

  return (
    <>
      <Header/>
      <main className={styles.wrapper}>
        <TaskList/>
      </main>
    </>
  )
}

export default App
