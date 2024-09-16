import handler  from "controllers/todos/handlers";
import schema from "controllers/todos/schema";
import { FastifyPluginAsync } from "fastify";


const customerFeedbacks: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", { schema: schema.GET_ALL }, handler.GET_ALL);
  fastify.get("/:id", { schema: schema.GET_BY_ALL }, handler.GET_BY_ID);
  fastify.get("/delete/:id", {schema: schema.DELETE_BY_ALL }, handler.DELETE_BY_ID);
  fastify.post("/add", {schema: schema.POST}, handler.POST);
};

export default customerFeedbacks;
