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

  // const customParams = Schema.object().prop("password", Schema.string()).prop("email", Schema.string());

  const requestBody = Schema.object()
  .prop("email", Schema.string().required())
  .prop("password", Schema.string()).required()
  .valueOf() as JSONSchema;

const login = Schema.object()
  .prop(
    "data",
    Schema.array().items(
      Schema.object()
        .prop("id", Schema.string())
        .prop("name", Schema.string())
        .prop("email", Schema.string())
        .prop("token", Schema.string())
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
export const Login = {
  description:
    "This API is used for Login User.",
  tags: ["USERS"],
  // query: customParams,
  body: requestBody,
  response: makeResponseSchema(login),
};
