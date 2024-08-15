"use client";

import { IconTrash } from "@tabler/icons-react";
import React from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  removeTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  removeTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <IconTrash size={24} onClick={() => removeTodo(id)} />
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-400"
      >
        {title}
      </label>
    </li>
  );
}
