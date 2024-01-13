import { createContext } from "react";
import { Todo, TodoActions } from "../type";

export const TodosContext = createContext<{ todos: Todo[] }>({ todos: [] });
export const TodoActionsContext = createContext<Partial<TodoActions>>({});

export const TodosProvider = ({
  children,
  actions,
  todos,
}: {
  children: React.ReactNode;
  actions: TodoActions;
  todos: Todo[];
}) => {
  return (
    <TodosContext.Provider value={{ todos }}>
      <TodoActionsContext.Provider value={actions}>{children}</TodoActionsContext.Provider>
    </TodosContext.Provider>
  );
};
