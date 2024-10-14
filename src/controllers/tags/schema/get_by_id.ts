import Schema, { JSONSchema } from "fluent-json-schema";

import { makeResponseSchema } from "@helpers";

const customParams = Schema.object().prop("id", Schema.string());
const getResponse = Schema.object()
  .prop(
    "data",
    Schema.array().items(
      Schema.object()
        .prop("id", Schema.string())
        .prop("tag_name", Schema.string())
        .prop("is_active", Schema.boolean())
    )
  )
  .valueOf() as JSONSchema;

export const GET_BY_ALL = {
  description:
    "This API is used for fetching Tag by id.",
  tags: ["TAGS"],
  query: customParams,
  response: makeResponseSchema(getResponse),
};
