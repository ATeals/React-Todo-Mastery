import { useContext } from "react";
import { TodoActionsContext, TodosContext } from "../components/Provider";
import { isFullAction } from "../utils/isFullAction";

export const useTodoActions = () => {
  const actions = useContext(TodoActionsContext);

  if (!isFullAction(actions)) throw new Error("actions는 모든 함수를 가지고 있어야 합니다.");

  return actions;
};
export const useTodoContext = () => useContext(TodosContext);
