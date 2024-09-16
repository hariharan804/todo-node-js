import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function GET_ALL(request: FastifyRequest, reply: FastifyReply) {
  try {
    const users = await db("users").select();
    console.log("🚀 ~ GET_ALL ~ users:", users);
    return reply.send({
      data: users,
    });
  } catch (error: any) {
    return reply.send({
      data: [],
    });
  }
}
 