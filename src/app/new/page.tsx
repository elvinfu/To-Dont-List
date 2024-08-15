"use client";
import TodoForm from "@/components/TodoForm";
//import { createTodo } from "@/hooks/todoUtils";
import { createTodo } from "@/hooks/useTodos";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-left w-full max-w-sm px-4">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Task</h1>
        </header>
        <TodoForm onSubmit={createTodo} />
      </div>
    </div>
  );
}
