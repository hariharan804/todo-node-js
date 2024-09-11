import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function POST(
  request: FastifyRequest<{ Body: { name: string } }>,
  reply: FastifyReply
) {
  try {
    const { name } = request?.body;
    console.log("🚀 ~ name:", name);

    const todo = await db("todos").returning("*").insert({ todo_name: name });
    console.log("🚀 ~ GET_ALL ~ todos:", todo);
    return reply.send({
      data: todo,
    });
  } catch (error: any) {
    return reply.send({
      data: [],
    });
  }
}
