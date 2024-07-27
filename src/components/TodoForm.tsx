// components/TodoForm.tsx
"use client";

import { useState, FormEvent, FocusEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface TodoFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFirstFocus, setIsFirstFocus] = useState<boolean>(false);
  const router = useRouter();

  // Handle input field changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/^Don't\s*/, "");
    setInputValue(newValue);
  };

  const handleFocus = () => {
    if (!isFirstFocus) {
      setIsFirstFocus(true);
    }
  };

  // Prepare the display value with prefix if the field is focused or not empty
  const displayValue = isFirstFocus ? `Don't ${inputValue}` : inputValue;

  // Handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("title", inputValue ? inputValue : "");
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
      <div className="relative">
        <input
          type="text"
          name="title"
          value={displayValue}
          onChange={handleChange}
          onFocus={handleFocus}
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          placeholder="Type here"
        />
      </div>
      <div className="flex gap-1 justify-end">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        >
          Create
        </button>
      </div>
    </form>
  );
}
