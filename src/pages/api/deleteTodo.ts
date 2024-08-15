/*import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = JSON.parse(req.body);

  await prisma.todo.delete({
    where: { id },
  });

  res.status(200).json({ success: true });
}
*/
