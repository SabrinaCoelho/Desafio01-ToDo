import styles from "./TaskList.module.css";
import { NewTask } from "./NewTask";
import { Task } from "./Task";
import { useState } from "react";
import { EmptyList } from "./EmptyList";
import { HeaderList } from "./HeaderList";


export function TaskList(){
    /* const [tasks, setTasks] = useState([
        {
            id: 0,
            isChecked: true,
            content: "Integer urna interdum massa libero auctor neque turpis turpis semper."
        },{
            id: 1,
            isChecked: false,
            content: "Duis vel sed fames integer."
        }
    ]); */
    const [tasks, setTasks] = useState<Task[]>([]);

    const [finishedCount, setFinishedCount] = useState(initialCheckedCount(tasks));
    const [createdCount, setCreatedCount] = useState(tasks.length);//voltar

    function deleteTask(taskToDelete: string ){
        const tasksWithoutTheDeletedOne = tasks.filter((task: Task) => {
            return task.content !== taskToDelete
        })
        setTasks(tasksWithoutTheDeletedOne);
        setCreatedCount(prev => prev - 1);

        updateCheckedCount(tasksWithoutTheDeletedOne);
    }

    function toggleCheck(taskToChangeCheck: string){
        const updateCheckTasks = tasks.map((task: Task) => {
           if(task.content === taskToChangeCheck){
                return {
                    ...task,
                    isChecked: !task.isChecked
                };
            }
            return {...task}
        });
        
        setTasks(updateCheckTasks);
        updateCheckedCount(updateCheckTasks);
        
    }

    function addTask(newTask: Task){
        setTasks([...tasks, newTask]);
        setCreatedCount(prev => prev + 1);
    }

    function initialCheckedCount(tasks: Task[]){
        const initialCount = 0;
        const sum = tasks.reduce((checkedCount, cur) => {
            if(cur.isChecked){
                return checkedCount + 1
            }
            return checkedCount
        }, initialCount)
        
        return sum;
    }
    function updateCheckedCount(tasks: Task[]){
        const initialCount = 0;
        const sum = tasks.reduce((checkedCount, cur) => {
            if(cur.isChecked){
                return checkedCount + 1
            }
            return checkedCount
        }, initialCount)
        
        setFinishedCount(sum);
    }
    return(
        <section className={styles.wrapper}>
            <NewTask onAddTask={addTask} />
            <HeaderList createdCount={createdCount} finishedCount={finishedCount}/>
            {tasks.length === 0?
            (
                <EmptyList />
            ): 
                tasks.map(item => {
                    return(
                        <Task 
                            key={item.content} 
                            task={item}
                            onDelete={deleteTask}
                            onChange={toggleCheck}
                        />
                    )
                })
            }
            
        </section>
    );
}