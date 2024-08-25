import TodoItem from "@/components/TodoItem";
import TypeTodo from "./TypeTodo";
import { ITask } from "@/types/tasks";

interface TodoListProps {
  todos: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      <TypeTodo />
      <div className="text-2xl font-bold ml-1 mb-1 mt-14">Incomplete</div>
      <ul>
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <div key={todo.id} className="py-0.5">
              <TodoItem todo={todo}></TodoItem>
            </div>
          ))}
      </ul>
      <div className="text-2xl font-bold ml-1 mb-1 mt-14">Complete</div>
      <ul>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <div key={todo.id} className="py-0.5">
              <TodoItem todo={todo}></TodoItem>
            </div>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
