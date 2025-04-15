import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export function NewTask(){
    return(
        <div className={styles.wrapper}>
            <form className={styles.new_task_form}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
            </form>
            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    );
}