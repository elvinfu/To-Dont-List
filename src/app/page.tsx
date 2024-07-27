import prisma from "@/db";
import TodoList from "@/components/TodoList";
import NewTodoButton from "@/components/NewTodoButton";

async function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center mb-4 mt-4">
        <div className="flex-grow text-center">
          <h1 className="text-5xl">
            To-
            <span className="font-bold">Don't TEST </span>List
          </h1>
        </div>
        <NewTodoButton></NewTodoButton>
      </header>
      <TodoList initialTodos={todos} />
    </>
  );
}
