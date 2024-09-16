import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function POST(
  request: FastifyRequest<{ Body: { name: string; email: string } }>,
  reply: FastifyReply
) {
  try {
    const { name, email } = request?.body;

    const user = await db("users").returning("*").insert({ name, email });
    console.log("🚀 ~ GET_ALL ~ users:", user);
    return reply.send({
      data: user,
    });
  } catch (error: any) {
    return reply.send({
      data: [],
    });
  }
}
