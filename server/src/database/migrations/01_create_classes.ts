import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('tipServico').notNullable();
        table.decimal('custo').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}