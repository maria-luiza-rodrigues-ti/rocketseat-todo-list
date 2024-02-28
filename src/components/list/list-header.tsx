import styles from "./list-header.module.css";
export function ListHeader() {
  return (
    <div className={styles.listHeaderContainer}>
      <aside className={styles.createdTasks}>
        <p>
          Tarefas criadas <span>0</span>
        </p>
      </aside>
      <aside className={styles.finalizedTasks}>
        <p>
          Concluídas <span>0</span>
        </p>
      </aside>
    </div>
  );
}
