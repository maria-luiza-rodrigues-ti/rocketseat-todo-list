import styles from "./list-header.module.css";

interface ListHeaderProps {
  onCreatedTasksTag: () => number;
  onCompletionTaksTag: () => number;
}

export function ListHeader({
  onCreatedTasksTag,
  onCompletionTaksTag,
}: ListHeaderProps) {
  return (
    <div className={styles.listHeaderContainer}>
      <aside className={styles.createdTasks}>
        <p>
          Tarefas criadas <span>{onCreatedTasksTag()}</span>
        </p>
      </aside>
      <aside className={styles.finalizedTasks}>
        <p>
          Concluídas{" "}
          <span>
            {onCompletionTaksTag()} de {onCreatedTasksTag()}
          </span>
        </p>
      </aside>
    </div>
  );
}
