import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      className={styles.input}
      {...props}
    />
  );
}
