import { Check, Trash } from "@phosphor-icons/react";

import styles from "./list-item.module.css";
export function ListItem() {
  return (
    <div className={styles.listItemContainer}>
      <Check size={12} className={styles.check} />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash
        size={24}
        color="
      #808080"
      />
    </div>
  );
}
