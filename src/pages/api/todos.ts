"use server";

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";
import { redirect } from "next/navigation";

export const addTodo = async (todo: FormData) => {
  try {
    const title = "Don't " + todo.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid title");
    }
    const newTodo = await prisma.todo.create({
      data: {
        title: title,
        complete: true,
      },
    });
    return newTodo;
  } catch (error) {
    console.log(error);
  } finally {
    redirect("/");
  }
};

export const updateTodo = async (id: string, toggled: boolean) => {
  try {
    await prisma.todo.update({
      where: { id: String(id) },
      data: { complete: toggled },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await prisma.todo.delete({
      where: { id: String(id) },
    });
  } catch (error) {
    console.log("Error deleting todo: ", error);
    throw error;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
      } catch (error) {
        res.status(500).json({ error: "Error fetching todos" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
