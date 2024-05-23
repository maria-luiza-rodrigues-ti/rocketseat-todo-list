import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "sonner";
import { Fade } from "react-awesome-reveal";

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
  const [tasksList, setTasksList] = useState<TaskType[]>(() => {
    const tasksOnStorage = localStorage.getItem("tasks");
    if (tasksOnStorage) {
      return JSON.parse(tasksOnStorage);
    } else {
      return [];
    }
  });

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

    const updatedTasksList: TaskType[] = [...tasksList, newTask];

    setTasksList(updatedTasksList);

    localStorage.setItem("tasks", JSON.stringify(updatedTasksList));

    setNewTaskTitle("");
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: value };
      }

      return { ...task };
    });

    updatedTasks.sort((a, b) => {
      if (a.isComplete && !b.isComplete) {
        return 1;
      } else if (!a.isComplete && b.isComplete) {
        return -1;
      } else {
        return 0;
      }
    });

    setTasksList(updatedTasks);
  }

  function removeTask({ id }: { id: string }) {
    const taskListWithoutRemovedTask = tasksList.filter((task) => {
      return task.id !== id;
    });

    setTasksList(taskListWithoutRemovedTask);

    toast.error("Task removed!");

    localStorage.setItem("tasks", JSON.stringify(taskListWithoutRemovedTask));
  }

  function createdTasksTag() {
    return tasksList.length;
  }

  function completionTasksTag() {
    const numberOfCompletedTasks = tasksList.reduce((accumulator, task) => {
      if (task.isComplete) {
        accumulator += 1;
      }
      return accumulator;
    }, 0);

    localStorage.setItem("tasks", JSON.stringify(tasksList));

    return numberOfCompletedTasks;
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
        <ListHeader
          onCreatedTasksTag={createdTasksTag}
          onCompletionTaskTag={completionTasksTag}
        />
        {tasksList.length > 0 ? (
          <>
            {tasksList.map((task) => {
              return (
                <Fade key={task.id} className={styles.fadeContainer}>
                  <ListItem
                    task={task}
                    onToggleTaskStatus={handleToggleTask}
                    onRemoveTask={removeTask}
                  />
                </Fade>
              );
            })}
          </>
        ) : (
          <ListEmpty />
        )}
        <Toaster richColors />
      </div>
    </>
  );
}
