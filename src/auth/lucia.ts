import { db } from "@/database/turso";
import { userTable, sessionTable } from "@/database/schema";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);
