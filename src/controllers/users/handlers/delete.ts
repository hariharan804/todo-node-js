import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function DELETE_BY_ID(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request?.params;

    const user = await db("users").select().where({ id: id }).del();
    console.log("🚀 ~ GET_ALL ~ user:", user);
    return reply.send({
      data: user,
      message: user >= 1 ? "Deleted Successfully!" : "Deleted Failed!",
    });
  } catch (error: any) {
    return reply.send({
      data: 0,
      message: "Deleted Failed!",
    });
  }
}
