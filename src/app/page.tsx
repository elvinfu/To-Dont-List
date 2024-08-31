"use client"; // This makes the component a client component

import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import { ITask } from "@/types/tasks";

export default function Home() {
  const [todos, setTodos] = useState<ITask[]>([]); // Use useState to manage todos state
  const [reloadTodos, setReloadTodos] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/todos", { method: "GET" }); // Fetch data from the API
      const data = (await res.json()) as ITask[]; // Parse the response
      setTodos(data); // Set the todos state
    };
    fetchTodos(); // Call the fetchTodos function when the component mounts
  }, [reloadTodos]);

  return (
    <>
      <header className="flex justify-between items-center mb-0 mt-10">
        <div className="flex-grow text-center">
          <h1 className="text-5xl">
            To-
            <span className="font-bold">Don&apos;t </span>List
          </h1>
        </div>
      </header>
      <div className="p-16">
        <div className="max-w-2xl mx-auto">
          <TodoList todos={todos} setReloadTodos={setReloadTodos} />
        </div>
      </div>
    </>
  );
}
