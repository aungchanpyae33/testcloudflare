import { turso } from "./turso";

export interface Movie {
  title: string;

  // Assuming you have a unique id for each movie
}
export interface MovieRe {
  title: string;

  // Assuming you have a unique id for each movie
}
export const getData = async (query: string) => {
  console.log(query);
  if (query.length > 0) {
    const { rows } = await turso.execute(
      `SELECT title FROM movieB WHERE title LIKE '${query}%'`
    );
    const data: Movie[] = rows.map((row: any) => ({
      title: row.title,
    }));

    return data;
  }
  return [];
};

export async function getRecom(query: string) {
  console.log(query);

  if (query.length > 0) {
    console.time("Execution");

    const { rows } = await turso.execute(`
      WITH extracted_vector AS (
        SELECT vector_extract(embedding) AS embedding_vector 
        FROM movieB 
        WHERE title = '${query}'
      )
      SELECT title 
      FROM movieB, extracted_vector
      ORDER BY vector_distance_cos(embedding, extracted_vector.embedding_vector) 
      LIMIT 3
    `);

    console.timeEnd("Execution");

    const data: MovieRe[] = rows.map((row: any) => ({
      title: row.title,
    }));

    return data;
  }

  return [];
}
