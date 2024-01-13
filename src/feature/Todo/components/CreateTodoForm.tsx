import { useFrom } from "@/feature/common/hooks/useForm";
import { useTodoActions } from "../hooks/useTodoContext";

export const CreactTodoForm = () => {
  const { formState, register, resetField } = useFrom({ defaultValues: { content: "" } });
  const actions = useTodoActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetField("content");
    actions.create(formState.content);
  };

  return (
    <form onSubmit={handleSubmit} className="m-5">
      <input type="text" className="ring-2 ring-black" {...register("content")} />
      <button className="mx-2">
        <i className="bi bi-plus-circle"></i>
      </button>
    </form>
  );
};
