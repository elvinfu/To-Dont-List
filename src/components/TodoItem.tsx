"use client";

import { deleteTodo, toggleTodo } from "@/api";
import { ITask } from "@/types/tasks";
import { IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import IconCheckBox from "./Checkbox";

interface TodoItemProps {
  todo: ITask;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    router.refresh();
  };

  const handleToggleTodo = async (todo: ITask) => {
    todo.completed = !todo.completed;
    await toggleTodo(todo);
    router.refresh();
  };

  return (
    <li className="flex gap-2 items-center" style={{ userSelect: "none" }}>
      <input
        id={todo.id}
        type="checkbox"
        className="hidden peer"
        checked={todo.completed}
        onChange={() => handleToggleTodo(todo)}
      />
      <IconCheckBox
        checked={todo.completed}
        onClick={() => handleToggleTodo(todo)}
      ></IconCheckBox>

      <label
        htmlFor={todo.id}
        className="peer-checked:line-through peer-checked:text-slate-400 text-2xl"
      >
        {todo.text}
      </label>

      {!todo.completed && (
        <IconTrash
          className="ml-auto"
          color={isHovered ? "red" : "white"}
          size={24}
          onClick={() => handleDeleteTodo(todo.id)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></IconTrash>
      )}
    </li>
  );
};

export default TodoItem;
