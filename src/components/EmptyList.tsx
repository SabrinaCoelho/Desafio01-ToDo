import { Notepad } from "phosphor-react";
import styles from "./EmptyList.module.css"

export function EmptyList(){
    return(
        <div className={styles.no_tasks_container}>
            <div className={styles.no_tasks}>
                <Notepad size={56} className={styles.notePad_logo}/>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}