import Schema, { JSONSchema } from "fluent-json-schema";

import { makeResponseSchema } from "@helpers";

const customParams = Schema.object().prop("id", Schema.string());

const getResponse = Schema.object()
  .prop(
    "data",
    Schema.array().items(
      Schema.object()
        .prop("id", Schema.string())
        .prop("name", Schema.string())
    )
  )
  .valueOf() as JSONSchema;

export const DELETE_BY_ALL = {
  description: "This API is used for deleting tag by id.",
  tags: ["TAGS"],
  query: customParams,
  response: makeResponseSchema(getResponse),
};
