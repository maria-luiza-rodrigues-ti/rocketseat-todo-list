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

export function App() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  function handleTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setNewTaskTitle(event.target.value);
  }

  function handleCreateNewTask() {
    const newTask: TaskType = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasksList((state) => [...state, newTask]);
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: value };
      }

      return { ...task };
    });

    setTasksList(updatedTasks);
  }

  function removeTask({ id }: { id: string }) {
    const taskListWithoutRemovedTask = tasksList.filter((task) => {
      return task.id !== id;
    });

    setTasksList(taskListWithoutRemovedTask);
  }

  return (
    <>
      <Header />
      <div className={styles.inputContainer}>
        <Input onChange={handleTaskTitle} value={newTaskTitle} />
        <button onClick={handleCreateNewTask}>
          Criar <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.listContainer}>
        <ListHeader />
        {tasksList.length > 0 ? (
          <>
            {tasksList.map((task) => {
              return (
                <ListItem
                  key={task.id}
                  task={task}
                  onToggleTaskStatus={handleToggleTask}
                  onRemoveTask={removeTask}
                />
              );
            })}
          </>
        ) : (
          <ListEmpty />
        )}
      </div>
    </>
  );
}
