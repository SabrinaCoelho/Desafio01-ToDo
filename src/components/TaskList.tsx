import { Notepad } from "phosphor-react";
import styles from "./TaskList.module.css";
import { NewTask } from "./NewTask";

export function TaskList(){
    const tasks: any[] = [];
    return(
        <section className={styles.wrapper}>
            {/* <div className={styles.newTask}>
                <NewTask />
            </div> */}
            <div className={styles.tasks_status}>
                <div>
                    <strong className={styles.created_tasks}>Tarefas criadas</strong>
                    <span className={styles.tasks_count}>0</span>
                </div>
                <div>
                    <strong className={styles.finished_tasks}>Concluídas</strong>
                    <span className={styles.tasks_count}>0</span>
                </div>
            </div>
            <div className={styles.tasks_container}>
                {tasks.length === 0?
                    <div className={styles.no_tasks}>
                        <Notepad size={56} className={styles.notePad_logo}/>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>:
                    <></>
                }
            </div>
        </section>
    );
}