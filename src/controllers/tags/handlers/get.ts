import { handleResponse, responseType } from "@helpers";
import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function GET_ALL(request: FastifyRequest, reply: FastifyReply) {
  try {
    const tags = await db("tags").select();
    console.log("🚀 ~ GET_ALL ~ tags:", tags);
    // return reply.send({
    //   data: todos,
    // });
    return handleResponse(request, reply, responseType?.OK, {
      data: {tags},
    });
  } catch (error: any) {
    return handleResponse(request, reply, responseType?.INTERNAL_SERVER_ERROR, {
      error: {
        message: responseType?.INTERNAL_SERVER_ERROR,
      },
    });
  }
}

