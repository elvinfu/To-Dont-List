import useSWR, { mutate } from "swr";
import axios from "axios";
import { addTodo, updateTodo, deleteTodo } from "@/pages/api/todos";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const getTodos = () => {
  const { data, error } = useSWR("/api/todos", fetcher);
  return {
    todos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const createTodo = async (todo: FormData) => {
  try {
    await mutate(addTodo(todo));
  } catch (error) {
    console.log("Failed to add todo", error);
  }
};

export const removeTodo = async (id: string) => {
  try {
    mutate(
      "/api/todos",
      (todos) => {
        return todos.filter((todo) => todo.id !== id);
      },
      false
    );

    await deleteTodo(id);

    mutate("/api/todos");
  } catch (error) {
    console.log("Failed to remove todo", error);
  }
};

export const toggleTodo = async (id: string, toggled: boolean) => {
  try {
    mutate(
      "/api/todos",
      (todos) => {
        return todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, complete: toggled };
          }
          return todo;
        });
      },
      false
    );
    await updateTodo(id, toggled);

    mutate("/api/todos");
  } catch (error) {
    console.log("Failed to toggle todo", error);
  }
};
