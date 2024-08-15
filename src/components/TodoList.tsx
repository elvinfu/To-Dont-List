"use client";

import { getTodos, removeTodo, toggleTodo } from "../hooks/useTodos";
import { TodoItem } from "@/components/TodoItem";

type Todo = {
  id: string;
  title: string;
  complete: boolean;
};

type TodoListProps = {
  initialTodos: Todo[];
};

export default function TodoList() {
  const { todos, isLoading, isError } = getTodos();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos.</div>;

  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          complete={todo.complete}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}
