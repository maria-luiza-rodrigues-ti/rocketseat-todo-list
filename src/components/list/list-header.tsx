import styles from "./list-header.module.css";

interface ListHeaderProps {
  onCreatedTasksTag: () => number;
  onCompletionTaskTag: () => number;
}

export function ListHeader({
  onCreatedTasksTag,
  onCompletionTaskTag: onCompletionTaskTag,
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
            {onCompletionTaskTag()} de {onCreatedTasksTag()}
          </span>
        </p>
      </aside>
    </div>
  );
}
