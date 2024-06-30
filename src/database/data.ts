import { turso } from "./turso";

export interface Movie {
  year: string;
  // Assuming you have a unique id for each movie
}

export async function getData(query: string) {
  console.log(query);
  if (query.length > 0) {
    const { rows } = await turso.execute(
      `SELECT year FROM movies WHERE year LIKE '${query}%' `
    );
    const data: Movie[] = rows.map((row: any) => ({
      year: row.year,
    }));
    return data;
  }
  return [];
}
