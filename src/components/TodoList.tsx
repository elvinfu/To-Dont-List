"use client";

import { useState, useEffect } from "react";
import { TodoItem } from "@/components/TodoItem";

type Todo = {
  id: string;
  title: string;
  complete: boolean;
};

type TodoListProps = {
  initialTodos: Todo[];
};

export default function TodoList({ initialTodos }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  async function toggleTodo(id: string, complete: boolean) {
    await fetch(`/api/toggleTodo`, {
      method: "POST",
      body: JSON.stringify({ id, complete }),
    });

    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, complete } : todo))
    );
  }

  async function deleteTodo(id: string) {
    await fetch(`/api/deleteTodo`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });

    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <ul className="p1-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
