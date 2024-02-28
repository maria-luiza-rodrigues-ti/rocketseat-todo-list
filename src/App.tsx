import { Header } from "./components/header";
import { Input } from "./components/input";
import { ListHeader } from "./components/list/list-header";
import { ListEmpty } from "./components/list/list-empty";

export function App() {
  return (
    <>
      <Header />
      <Input />
      <div>
        <ListHeader />
        <ListEmpty />
      </div>
    </>
  );
}
