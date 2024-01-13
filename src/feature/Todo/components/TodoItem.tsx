import { memo } from "react";
import { Todo } from "../type";
import { useTodoActions } from "../hooks/useTodoContext";

const TodoItemComponent = ({ todo }: { todo: Todo }) => {
  const actions = useTodoActions();

  const handleClickComplete = () => actions.toggleComplete(todo.id);
  const handleClickRemove = () => actions.remove(todo.id);

  return (
    <div
      id={String(todo.id)}
      className="flex justify-between items-center [&>*]:mx-1 p-2 group hover:cursor-pointer"
    >
      <div
        className="flex [&>*]:mx-1 w-full"
        onClick={handleClickComplete}
        style={{ opacity: todo.isComplete ? 0.4 : 1 }}
      >
        <span>
          {todo.isComplete ? <i className="bi bi-check-circle" /> : <i className="bi bi-circle" />}
        </span>
        <p>{todo.content}</p>
      </div>

      <button onClick={handleClickRemove} className="hidden hover:text-red-500 group-hover:block ">
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};

export const TodoItem = memo(TodoItemComponent);
