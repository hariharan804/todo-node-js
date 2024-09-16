import { handleResponse, responseType } from "@helpers";
import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";

export async function DELETE_BY_ID(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request?.params;

    const todo = await db("todos").select().where({ id: id }).del();
    console.log("🚀 ~ GET_ALL ~ todos:", todo);
    // return reply.send({
    //   data: todo,
    //   message: todo >= 1 ? "Deleted Successfully!" : "Deleted Failed!",
    // });

    return handleResponse(request, reply, responseType?.OK, {
      data: todo,
    });
  } catch (error: any) {
    return handleResponse(request, reply, responseType?.INTERNAL_SERVER_ERROR, {
      error: {
        message: responseType?.INTERNAL_SERVER_ERROR,
      },
    });
  }
}
