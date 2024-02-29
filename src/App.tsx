import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TaskType } from "./components/list/list-item";

import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/header";
import { Input } from "./components/input";
import { ListHeader } from "./components/list/list-header";
import { ListItem } from "./components/list/list-item";
import { ListEmpty } from "./components/list/list-empty";

import styles from "./app.module.css";

// const tasks: TaskType[] = [
//   {
//     id: uuidv4(),
//     title: "Estudar Next",
//     isComplete: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Estudar Node",
//     isComplete: false,
//   },
//   {
//     id: uuidv4(),
//     title: "Estudar Tailwind",
//     isComplete: false,
//   },
// ];

export function App() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  function handleTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTaskTitle(event.target.value);
  }

  function handleCreateTask() {
    const newTask: TaskType = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasksList((state) => [...state, newTask]);
  }

  return (
    <>
      <Header />
      <div className={styles.inputContainer}>
        <Input onChange={handleTaskTitle} value={newTaskTitle} />
        <button onClick={handleCreateTask}>
          Criar <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.listContainer}>
        <ListHeader />
        {tasksList.length > 0 ? (
          <>
            {tasksList.map((task) => {
              return <ListItem task={task} key={task.id} />;
            })}
          </>
        ) : (
          <ListEmpty />
        )}
      </div>
    </>
  );
}
