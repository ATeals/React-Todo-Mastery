import { TodoActions } from "../type";

export const isFullAction = (action: Partial<TodoActions>): action is TodoActions => {
  return (
    typeof action.create === "function" &&
    typeof action.remove === "function" &&
    typeof action.toggleComplete === "function"
  );
};
