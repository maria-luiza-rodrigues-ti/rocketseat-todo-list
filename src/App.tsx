import { Header } from "./components/header";
import { Input } from "./components/input";
import { ListHeader } from "./components/list/list-header";

export function App() {
  return (
    <>
      <Header />
      <Input />
      <div>
        <ListHeader />
      </div>
    </>
  );
}
