import styles from "./HeaderList.module.css";

interface HeaderListProps{
    createdCount: number;
    finishedCount: number;
}

export function HeaderList({createdCount, finishedCount}: HeaderListProps){
    return(
        <div className={styles.tasks_status}>
            <div>
                <strong className={styles.created_tasks}>Tarefas criadas</strong>
                <span className={styles.tasks_count}>{createdCount}</span>
            </div>
            <div>
                <strong className={styles.finished_tasks}>Concluídas</strong>
                <span className={styles.tasks_count}>{finishedCount} de {createdCount}</span>
            </div>
        </div>
    )
}