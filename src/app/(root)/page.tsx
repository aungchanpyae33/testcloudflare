import React from "react";
import { validateRequest } from "@/auth/auth";
import { turso } from "@/database/turso";
import { Movie } from "@/database/data";
import { redirect } from "next/navigation";
// import { Song } from "@/lib/zustand";
async function get() {
  const user = await validateRequest();
  return user;
}

async function page() {
  console.time("b");
  const { rows } = await turso.execute("SELECT year FROM movies");
  console.timeEnd("b");
  const data: Movie[] = rows.map((row: any) => ({
    year: row.year,
  }));
  return (
    <div>
      this is hi
      {data.map((item) => (
        <p key={item.year}>{item.year}</p>
      ))}
    </div>
  );
}
export default page;
