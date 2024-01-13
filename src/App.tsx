import { TodoItem, CreactTodoForm, TodosProvider } from "./feature/Todo/components";
import { useTodos } from "./feature/Todo/hooks/useTodos";

const App = () => {
  const { todos, actions } = useTodos();

  return (
    <section className="m-2 p-2 bg-white max-w-[480px] mx-auto flex flex-col h-full">
      <TodosProvider todos={todos} actions={actions}>
        <CreactTodoForm />
        <article className="[&>*]:m-5 [&>*]:text-xl ring-1 w-full max-h-[480px] overflow-scroll">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </article>
      </TodosProvider>
    </section>
  );
};

export default App;
