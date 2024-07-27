"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewTodoButton() {
  const router = useRouter();

  return (
    <button
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      onClick={() => router.push("/new")}
    >
      New
    </button>
  );
}
