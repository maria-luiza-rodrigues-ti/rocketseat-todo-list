import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <div>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <span></span>
        </button>
      </div>
    </>
  );
}
