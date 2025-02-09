import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: './src/lib/schema.js',
  dbCredentials: { url: process.env.DATABASE_URL },
  verbose: true,
  strict: true,
  dialect: 'sqlite'
})
