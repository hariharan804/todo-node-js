import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function GET_ALL(request: FastifyRequest, reply: FastifyReply) {
  try {
    const todos = await db("todos").select();
    console.log("🚀 ~ GET_ALL ~ todos:", todos);
    return reply.send({
      data: todos,
    });
  } catch (error: any) {
    return reply.send({
      data: [],
    });
  }
}

export async function GET_BY_ID(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  console.log("🚀 ~ GET_BY_ID ~ request:", request?.params?.id);
  try {
    const { id } = request?.params;

    const todo = await db("todos").select().where({ id: id });
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
