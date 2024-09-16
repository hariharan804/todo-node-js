import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";
 
export async function GET_BY_ID(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request?.params;

    const user = await db("users").select().where({ id: id });
    console.log("🚀 ~ GET_ALL ~ user:", user);
    return reply.send({
      data: user,
    });
  } catch (error: any) {
    return reply.send({
      data: [],
    });
  }
}
