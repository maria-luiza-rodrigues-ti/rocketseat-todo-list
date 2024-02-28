import { PlusCircle } from "lucide-react";

import styles from "./input.module.css";
export function Input() {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
