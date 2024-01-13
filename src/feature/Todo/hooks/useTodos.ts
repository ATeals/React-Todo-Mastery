import { useMemo, useState } from "react";
import { Todo } from "../type";
import { uuid } from "@/feature/common/utils";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      content: "밥 먹기",
      isComplete: false,
    },
    {
      id: 2,
      content: "잠 자기",
      isComplete: false,
    },
    { id: 3, content: "", isComplete: false },
  ]);

  const create = (content: string) => {
    setTodos((todos) => [...todos, { id: uuid(), isComplete: false, content }]);
  };

  const toggleComplete = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id == id ? { ...todo, isComplete: !todo.isComplete } : todo))
    );
  };

  const remove = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const actions = useMemo(() => ({ create, toggleComplete, remove }), []);

  return { todos, actions };
};
