import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./Task";

interface NewTaskProps{
    onAddTask: (newTask: Task) => void;
}

export function NewTask({onAddTask}: NewTaskProps){
    const [newTask, setNewTask] = useState("");

    function handleNewTask(event: FormEvent){
        event.preventDefault();
        onAddTask({
            id: 0,//dummy
            isChecked: false,
            content: newTask
        });
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value);
    }
    return(
        <div className={styles.wrapper}>
            <form onSubmit={handleNewTask} className={styles.new_task_form}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    name="task"
                    value={newTask}
                    onChange={handleNewTaskChange}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>
    );
}