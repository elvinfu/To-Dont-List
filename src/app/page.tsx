"use client";

import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import { ITask } from "@/types/tasks";
import Link from "next/link";

export default function Home() {
  const [todos, setTodos] = useState<ITask[]>([]);
  const [reloadTodos, setReloadTodos] = useState<boolean>(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/todos", { method: "GET" });
      const data = (await res.json()) as ITask[];
      setTodos(data);
    };
    fetchTodos();
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
        <div className="flex space-x-4">
          {/* Sign In Button linking to the custom sign-in page */}
          <Link href="/signin">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Sign In
            </button>
          </Link>
          {/* Sign Up Button linking to the custom sign-up page */}
          <Link href="/signup">
            <button className="bg-green-500 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
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
