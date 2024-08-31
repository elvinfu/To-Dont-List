"use client";

import { addTodo } from "@/api2";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

interface TodoFormProps {
  setReloadTodos: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoForm({ setReloadTodos }: TodoFormProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSelected, setIsSelected] = useState(false);
  const router = useRouter();

  const handleKeyDown = (event: any) => {
    const { key, target } = event;
    if (target.selectionEnd <= 5 && (key === "Backspace" || key === "Delete")) {
      event.preventDefault();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    let finalVal;
    if (displayValue.startsWith("Don't") && !newValue.startsWith("Don't")) {
      finalVal = "";
    } else {
      finalVal = event.target.value.replace(/^Don't\s*/, "");
    }
    setInputValue(finalVal);
  };

  const setLineThrough = () => {
    if (displayValue) {
      return { textDecoration: "line-through" };
    } else {
      return {};
    }
  };

  const displayValue = inputValue ? `Don't ${inputValue}` : inputValue;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: displayValue,
      completed: true,
    };
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error("Failed to add new todo");
    }

    setInputValue("");
    setReloadTodos((state: boolean) => !state);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 flex-col"
      style={{ userSelect: "none" }}
    >
      <div className="relative">
        <input
          type="text"
          name="title"
          value={displayValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onFocus={() => setIsSelected(true)}
          onBlur={() => setIsSelected(false)}
          className="text-3xl bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100 w-full"
          placeholder={isSelected ? "Add task" : "+  Add task"}
          style={setLineThrough()}
        />
      </div>
    </form>
  );
}
