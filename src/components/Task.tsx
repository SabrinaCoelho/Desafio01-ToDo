import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export interface Task{
    id: number;
    isChecked: boolean | false;
    content: string;
}
interface TaskProps{
    task: Task;
    onDelete: (content: string) => void;
    onChange: (content: string) => void
}

export function Task({task, onDelete, onChange}: TaskProps){
    function handleDeleteTask(){
        onDelete(task.content);
    }

    function handleChangeTask(){
        onChange(task.content);
    }

    return(
        <div className={styles.wrapper}>
            <label className={task.isChecked ? styles.textChecked : ""}>
                <input type="checkbox" onChange={handleChangeTask}/>
                <span className={styles.checkbox_container}>
                    {
                        task.isChecked ? 
                        (<CheckCircle className={styles.checked} weight="fill" size={24} />):
                        (<Circle className={styles.unchecked} weight="bold" size={24} />)
                    }
                </span>
                {task.content}
            </label>
            <div onClick={handleDeleteTask}>
                <Trash className={styles.trash_icon} size={24}/>
            </div>
        </div>
    );
}