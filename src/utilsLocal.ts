import { ITask } from "@/types/tasks";

export const fetchTodos = (): ITask[] => {
  const storedTodos = localStorage.getItem("Todos");
  const todos = storedTodos ? (JSON.parse(storedTodos) as ITask[]) : [];
  return todos;
};

export const addTodo = (newTodo: ITask): void => {
  const todos = fetchTodos();
  const updatedTodos = [...todos, newTodo];
  localStorage.setItem("Todos", JSON.stringify(updatedTodos));
};

export const deleteTodo = (id: String): void => {
  const todos = fetchTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("Todos", JSON.stringify(updatedTodos));
};

export const toggleTodo = (todo: ITask): void => {
  const todos = fetchTodos();
  deleteTodo(todo.id);
  addTodo({ ...todo, completed: !todo.completed });
};
