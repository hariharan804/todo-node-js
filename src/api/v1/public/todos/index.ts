import { FastifyPluginAsync } from "fastify";

import handler from "./handlers";

const customerFeedbacks: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", {}, handler.GET_ALL);
  fastify.get("/:id", {}, handler.GET_BY_ID);
  fastify.get("/delete/:id", {}, handler.DELETE_BY_ID);
  fastify.post("/add", {}, handler.POST);
};

export default customerFeedbacks;
