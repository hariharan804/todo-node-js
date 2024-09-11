import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table: any) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.string("email").notNullable().unique();
    table.string("name").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
