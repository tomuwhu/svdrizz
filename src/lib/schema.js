import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
export const animals = sqliteTable('animals', {
	id: integer().primaryKey(),
	name: text(),
	age: integer()
})
