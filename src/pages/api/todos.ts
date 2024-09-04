import { NextApiRequest, NextApiResponse } from "next";
import { getAllTodos, addTodo, deleteTodo, toggleTodo } from "@/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        const todos = await getAllTodos(req, res);
        res.status(200).json(todos);
        break;
      case "POST":
        const newTodo = await addTodo(req, res, req.body);
        res.status(201).json(newTodo);
        break;
      case "DELETE":
        const { id } = req.query;
        if (typeof id !== "string") {
          res.status(400).json({ error: "Invalid id" });
          return;
        }
        await deleteTodo(req, res, id);
        res.status(204).end();
        break;

      case "PUT":
        const updatedTodo = await toggleTodo(req, res, req.body);
        res.status(200).json(updatedTodo);
        break;

      default:
        res.setHeader("Allow", ["GET", "POST", "DELETE", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
