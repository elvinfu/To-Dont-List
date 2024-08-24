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
            <TodoItem key={todo.id} todo={todo}></TodoItem>
          ))}
      </ul>
      <div className="text-2xl font-bold ml-1 mb-1 mt-14">Complete</div>
      <ul>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo}></TodoItem>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
