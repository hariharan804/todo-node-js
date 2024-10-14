import { handleResponse, responseType } from "@helpers";
import db from "database";
import { FastifyReply, FastifyRequest } from "fastify";
import { generateAccessToken } from "helpers/functions";

export async function POST(
  request: FastifyRequest<{ Body: { name: string; email: string, password: string } }>,
  reply: FastifyReply
) {
  try {
    const { name, email, password } = request?.body;

    const user = await db("users").returning("*").insert({ name, email, password });
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
export async function Login(
  request: FastifyRequest<{ Body: { password: string; email: string } }>,
  reply: FastifyReply
) {
  try {
    const { password, email } = request?.body;

    const user: any = await db("users").returning("*").where({ password, email });

    console.log("🚀 ~   ~ users:", user);
     
    if(user){
      const token = generateAccessToken({name: user.name, email: user.email})
      return handleResponse(request, reply, responseType?.OK, {
        data: {...user, token: token},
      });
    }else{
      return handleResponse(request, reply, responseType?.NOT_FOUND, {
        error: {
          message: responseType?.NOT_FOUND,
        },
      });
    }
   
  } catch (error: any) {
    return handleResponse(request, reply, responseType?.INTERNAL_SERVER_ERROR, {
      error: {
        message: responseType?.INTERNAL_SERVER_ERROR,
      },
    });
  }
}
