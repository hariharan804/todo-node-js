import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { name: "Hari", email: "hari@gmail.com" },
    { name: "test", email: "test@gmail.com" },
  ]);
}
