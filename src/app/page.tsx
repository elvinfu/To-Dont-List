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
            <span className="font-bold">Don't </span>List
          </h1>
        </div>
      </header>
      <div className="p-16">
        <div className="max-w-2xl mx-auto">
          <TodoList todos={todos} />
        </div>
      </div>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="fuelvin"
        data-description="Support me on Buy me a coffee!"
        data-message="*E-sips coffee* mmmmm"
        data-color="#FF813F"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </>
  );
}
