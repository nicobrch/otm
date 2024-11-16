import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.AUTH_DRIZZLE_URL) {
    throw new Error("Missing environment variable AUTH_DRIZZLE_URL");
}

export const db = drizzle(process.env.AUTH_DRIZZLE_URL);