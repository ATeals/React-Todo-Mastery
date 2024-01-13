export interface Todo {
  id: number;
  content: string;
  isComplete: boolean;
}

export interface TodoActions {
  create: (context: string) => void;
  remove: (id: number) => void;
  toggleComplete: (id: number) => void;
}
