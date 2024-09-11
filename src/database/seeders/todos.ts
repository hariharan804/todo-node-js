import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("todos").del();

  // Inserts seed entries
  await knex("todos").insert([
    { todo_name: "test todo" },
    { todo_name: "Front end" },
    { todo_name: "Back end" },
  ]);
}
