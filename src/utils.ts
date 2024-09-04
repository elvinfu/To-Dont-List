import { ITask } from "./types/tasks";
import createClient from "../utils/supabase/api";
import { NextApiRequest, NextApiResponse } from "next";

export const getAllTodos = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<ITask[]> => {
  const supabase = createClient(req, res);
  const { data: todos, error } = await supabase.from("Todos").select("*");

  if (error) {
    console.error("Error fetching todos: ", error.message);
    return [];
  }

  return todos;
};

export const addTodo = async (
  req: NextApiRequest,
  res: NextApiResponse,
  todo: ITask
): Promise<ITask> => {
  const supabase = createClient(req, res);
  const { data: newTodo, error } = await supabase
    .from("Todos")
    .insert(todo)
    .single();

  if (error) {
    console.error("Error adding todo: ", error.message);
    throw new Error(error.message);
  }

  return newTodo;
};

export const deleteTodo = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
): Promise<void> => {
  const supabase = createClient(req, res);
  const { error } = await supabase.from("Todos").delete().eq("id", id);

  if (error) {
    console.error("Error deleting todo:", error.message);
    throw new Error(error.message);
  }
};

export const toggleTodo = async (
  req: NextApiRequest,
  res: NextApiResponse,
  todo: ITask
): Promise<ITask> => {
  const supabase = createClient(req, res);
  const updatedTodo = { ...todo, completed: !todo.completed };
  const { error } = await supabase
    .from("Todos")
    .update({ completed: updatedTodo.completed })
    .eq("id", todo.id)
    .single();

  if (error) {
    console.error("Error updating todo:", error.message);
    throw new Error(error.message);
  }

  return updatedTodo;
};
