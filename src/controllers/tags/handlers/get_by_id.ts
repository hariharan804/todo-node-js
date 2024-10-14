import { handleResponse, responseType } from "@helpers";
import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";


export async function GET_BY_ID(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  console.log("🚀 ~ GET_BY_ID ~ request:", request?.params?.id);
  try {
    const { id } = request?.params;

    const tags = await db("tags").select().where({ id: id });
    console.log("🚀 ~ GET_ALL ~ tags:", tags);
    // return reply.send({
    //   data: todo,
    // });
    return handleResponse(request, reply, responseType?.OK, {
      data: tags,
    });
  } catch (error: any) {
    return handleResponse(request, reply, responseType?.INTERNAL_SERVER_ERROR, {
      error: {
        message: responseType?.INTERNAL_SERVER_ERROR,
      },
    });
  }
}