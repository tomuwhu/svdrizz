import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { env } from '$env/dynamic/private'
if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set')
const client = new Database(env.DATABASE_URL)
export const db = drizzle(client)
import { animals } from './db/schema'

export const getAnimals = async () => {
    const result = await db.select().from(animals);
    return result
}

export const newAnimal = async ({ name, age }) => {
    const { insertId } = await db.insert(animals).values({ name, age }).returning();
}