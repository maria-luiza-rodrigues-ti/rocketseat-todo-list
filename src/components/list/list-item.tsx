import { Check, Trash } from "@phosphor-icons/react";

import styles from "./list-item.module.css";

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
  onToggleTaskStatus: ({ id, value }: { id: string; value: boolean }) => void;
  onRemoveTask: ({ id }: { id: string }) => void;
}

export function ListItem({
  task,
  onToggleTaskStatus,
  onRemoveTask,
}: TaskProps) {
  const checkboxCheckedClassname = task.isComplete
    ? styles.checkboxChecked
    : styles.checkboxUnchecked;
  const titleCheckedClassname = task.isComplete
    ? styles.titleCompletedTask
    : "";

  function handleTaskComplete() {
    onToggleTaskStatus({ id: task.id, value: !task.isComplete });
  }

  function handleRemoveTask() {
    onRemoveTask({ id: task.id });
  }

  return (
    <div className={styles.listItemContainer}>
      <label htmlFor="checked" onClick={handleTaskComplete}>
        <input readOnly type="checkbox" checked={task.isComplete} />
        <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
          {task.isComplete && <Check size={10} color="#f2f2f2" />}
        </span>
      </label>
      <p className={`${styles.title} ${titleCheckedClassname}`}>{task.title}</p>
      <button onClick={handleRemoveTask}>
        <Trash
          size={16}
          color="
      #808080"
        />
      </button>
    </div>
  );
}
