import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('problems_schedule',table=>{
        table.increments('id').primary()
        
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('problems_id')
            .notNullable()
            .references('id')
            .inTable('problems')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('problems_schedule'); 
}
