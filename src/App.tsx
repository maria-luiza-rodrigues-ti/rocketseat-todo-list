import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/header";
import { Input } from "./components/input";
import { ListHeader } from "./components/list/list-header";
import { ListItem } from "./components/list/list-item";

import styles from "./app.module.css";

const tasks = [
  {
    id: uuidv4(),
    title: "Estudar Next",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Estudar Node",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Estudar Tailwind",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Estudar JavaScript",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "Estudar React",
    isComplete: true,
  },
];

export function App() {
  return (
    <>
      <Header />
      <Input />
      <div className={styles.listContainer}>
        <ListHeader />
        {tasks.map((task) => {
          return <ListItem task={task} key={task.id} />;
        })}
      </div>
    </>
  );
}
