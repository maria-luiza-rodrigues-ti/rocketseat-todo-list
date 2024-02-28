import { Header } from "./components/header";
import { Input } from "./components/input";
import { ListHeader } from "./components/list/list-header";
import { ListItem } from "./components/list/list-item";

import styles from "./app.module.css";

export function App() {
  return (
    <>
      <Header />
      <Input />
      <div className={styles.listContainer}>
        <ListHeader />
        <ListItem />
      </div>
    </>
  );
}
