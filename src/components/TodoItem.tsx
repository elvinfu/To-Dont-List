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
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  const router = useRouter();

  const handleDeleteTodo = async (id: string, event: React.MouseEvent) => {
    event?.stopPropagation();
    await deleteTodo(id);
    router.refresh();
  };

  const handleToggleTodo = async (todo: ITask) => {
    todo.completed = !todo.completed;
    await toggleTodo(todo);
    router.refresh();
  };

  return (
    <li
      className={`flex gap-2 items-center bg-opacity-5 ${
        isHovered ? "bg-slate-400" : "bg-slate-100"
      } rounded-lg p-2`}
      style={{ userSelect: "none" }}
      onClick={() => handleToggleTodo(todo)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconCheckBox checked={todo.completed}></IconCheckBox>

      <label
        htmlFor={todo.id}
        className={`text-2xl ${
          todo.completed ? "line-through" : "text-slate-400"
        } `}
      >
        {todo.text}
      </label>

      {!todo.completed && (
        <IconTrash
          className="ml-auto"
          color={isTrashHovered ? "red" : "white"}
          size={24}
          onClick={(event) => handleDeleteTodo(todo.id, event)}
          onMouseEnter={() => setIsTrashHovered(true)}
          onMouseLeave={() => setIsTrashHovered(false)}
        ></IconTrash>
      )}
    </li>
  );
};

export default TodoItem;
