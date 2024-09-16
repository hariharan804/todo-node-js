import Schema, { JSONSchema } from "fluent-json-schema";

import { makeResponseSchema } from "@helpers";

// const customParams = Schema.object();
const getResponse = Schema.object()
  .prop(
    "data",
    Schema.array().items(
      Schema.object()
        .prop("id", Schema.string())
        .prop("name", Schema.string())
        .prop("email", Schema.string())
    )
  )
  .valueOf() as JSONSchema;

export const POST = {
  description:
    "This API is used for adding User.",
  tags: ["USERS"],
  // query: customParams,
  response: makeResponseSchema(getResponse),
};
