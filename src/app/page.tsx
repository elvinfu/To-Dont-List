import TodoList from "@/components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const todos = await getAllTodos();
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
          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}
