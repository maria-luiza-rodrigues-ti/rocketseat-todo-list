import Clipboard from "/assets/clipboard.png";

import styles from "./list-empty.module.css";
export function ListEmpty() {
  return (
    <div className={styles.listEmptyContainer}>
      <img src={Clipboard} alt="Ícone de prancheta" />
      <p>
        <strong>Voce ainda não tem tarefas cadastradas</strong>Crie tarefas e
        organize seus itens a fazer
      </p>
    </div>
  );
}
