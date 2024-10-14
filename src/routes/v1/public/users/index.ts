import { FastifyPluginAsync } from "fastify";

import handler from "controllers/users/handlers";
import schema from "controllers/users/schema";

const customerFeedbacks: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", { schema: schema.GET_ALL }, handler.GET_ALL);
  fastify.get("/:id", { schema: schema.GET_BY_ALL }, handler.GET_BY_ID);
  fastify.get("/delete/:id", {schema: schema.DELETE_BY_ALL }, handler.DELETE_BY_ID);
  fastify.post("/add", {schema: schema.POST}, handler.POST);
  fastify.post("/login", {schema: schema.POST}, handler.Login);
};

export default customerFeedbacks;
