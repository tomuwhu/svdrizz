import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const animals = sqliteTable('animals', {
	id: integer('id').primaryKey(),
	name: text('name'),
	age: integer('age')
})
