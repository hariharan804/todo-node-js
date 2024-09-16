import { handleResponse, responseType } from "@helpers";
import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function GET_ALL(request: FastifyRequest, reply: FastifyReply) {
  try {
    const todos = await db("todos").select();
    console.log("🚀 ~ GET_ALL ~ todos:", todos);
    // return reply.send({
    //   data: todos,
    // });
    return handleResponse(request, reply, responseType?.OK, {
      data: {todos},
    });
  } catch (error: any) {
    return handleResponse(request, reply, responseType?.INTERNAL_SERVER_ERROR, {
      error: {
        message: responseType?.INTERNAL_SERVER_ERROR,
      },
    });
  }
}

