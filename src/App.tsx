import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskList } from "./components/TaskList";
import { NewTask } from "./components/NewTask";

function App() {

  return (
    <>
      <Header/>
      <main className={styles.wrapper}>
        <NewTask />
        <TaskList/>
      </main>
    </>
  )
}

export default App
