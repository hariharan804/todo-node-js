import { handleResponse, responseType } from "@helpers";
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
 
export async function GET_BY_EMAIL_ID(request: FastifyRequest<{ Params: { email: string } }>, reply: FastifyReply) {
  try {
    const { email } = request?.params;
    const users = await db("users").select().where({ email });;
    console.log("🚀 ~ GET_ALL ~ users:", users);
    // return reply.send({
    //   data: users,
    // });

    return handleResponse(request, reply, responseType?.OK, {
      data: users,
    });
  } catch (error: any) {
    // return reply.send({
    //   data: [],
    // });

    return handleResponse(request, reply, responseType?.INTERNAL_SERVER_ERROR, {
      error: {
        message: responseType?.INTERNAL_SERVER_ERROR,
      },
    });
  }
}
 