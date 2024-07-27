// app/page.tsx
import TodoForm from "@/components/TodoForm";
import { createTodo } from "@/utils/todoUtils";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center w-full max-w-sm px-4">
        <header className="mb-4">
          <h1 className="text-2xl">
            New To-<span className="font-bold">Don't</span>
          </h1>
        </header>
        <TodoForm onSubmit={createTodo} />
      </div>
    </div>
  );
}
