import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, complete } = JSON.parse(req.body);

  await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  res.status(200).json({ success: true });
}
