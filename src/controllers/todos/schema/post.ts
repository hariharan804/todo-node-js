import Schema, { JSONSchema } from "fluent-json-schema";

import { makeResponseSchema } from "@helpers";

// const customParams = Schema.object();
const getResponse = Schema.object()
  .prop(
    "data",
    Schema.array().items(
      Schema.object()
        .prop("id", Schema.string())
        .prop("todo_name", Schema.string())
        .prop("is_completed", Schema.boolean())
        .prop("user_id", Schema.string())
    )
  )
  .valueOf() as JSONSchema;

export const POST = {
  description:
    "This API is used for adding User.",
  tags: ["TODO"],
  // query: customParams,
  response: makeResponseSchema(getResponse),
};
