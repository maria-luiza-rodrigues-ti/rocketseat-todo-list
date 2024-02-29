import { Check, Trash } from "@phosphor-icons/react";

import styles from "./list-item.module.css";

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
}

export function ListItem({ task }: TaskProps) {
  const checkboxCheckedClassname = task.isComplete
    ? styles.checkboxChecked
    : styles.checkboxUnchecked;
  const titleCheckedClassname = task.isComplete
    ? styles.titleCompletedTask
    : "";

  return (
    <div className={styles.listItemContainer}>
      <label htmlFor="checked">
        <input readOnly type="checkbox" checked={task.isComplete} />
        <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
          {task.isComplete && <Check size={10} color="#f2f2f2" />}
        </span>
      </label>
      <p className={`${styles.title} ${titleCheckedClassname}`}>{task.title}</p>
      <button>
        <Trash
          size={16}
          color="
      #808080"
        />
      </button>
    </div>
  );
}
