import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("todos", (table: any) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.uuid("user_id").references("id").inTable("users");
    table.string("todo_name").notNullable();
    table.string("is_completed").defaultTo(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("todos");
}
