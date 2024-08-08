import type { Config } from "drizzle-kit";

export default {
  schema: "../database/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: "libsql://vectorsearch-ggop.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTgyODE2NTcsImlkIjoiY2I3MDZkZWItOWExZS00MGFlLTllMmYtYjFlZDhmMWI0YjYxIn0.Z06gSDEJGJHZ_wYw-CDbDCYd6Y8OFJStJueRQgXR9kSEUvOgnUv9C1mLmbrgPxSMUGdA-l7r-vnnxsaWJecXDA",
  },
} satisfies Config;
