import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tags", (table: any) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.string("tag_name").notNullable();
    table.string("is_active").defaultTo(true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("tags");
}
