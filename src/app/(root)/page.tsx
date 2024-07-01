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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores autem
        nemo ratione libero perspiciatis maxime velit accusamus, alias voluptate
        tenetur quaerat, eos odio dicta sunt animi? Consequatur, voluptatibus!
        Exercitationem sint expedita architecto dolorum. Itaque, veniam labore
        rerum quae facere vitae blanditiis eveniet similique adipisci, in
        excepturi, incidunt provident ratione perferendis distinctio nostrum
        pariatur. Reprehenderit laboriosam tempora expedita placeat? Hic
        excepturi cum, porro voluptate provident debitis velit ad odio tempore
        veritatis similique sint voluptatum repellat. Illo, enim dicta provident
        dolorum corrupti accusamus sint impedit nisi laborum odit error, eveniet
        ea porro consequuntur. Libero, dignissimos assumenda. Alias dolor
        excepturi esse sapiente aliquam! Ratione eos nostrum ut veritatis
        repudiandae debitis doloremque sequi dolor odio eum omnis velit enim
        esse aut dolore asperiores reprehenderit optio quisquam excepturi,
        mollitia non ipsa fugiat explicabo? Veniam suscipit dolores deleniti
        voluptatibus? Itaque eum iure voluptate nam debitis eveniet
        necessitatibus rem autem exercitationem quod. Est corporis ea tempora
        praesentium? Maxime dolorum eaque, et qui debitis quam quia sit aut
        nulla consectetur ab animi provident repudiandae aliquam dolore velit
        amet rem quod cum. Cumque, aliquid sit? Cumque aliquam soluta sunt!
        Error quas excepturi eius cum iste totam perferendis, vero vitae
        voluptate itaque exercitationem nisi natus hic eveniet blanditiis
        provident est. Iure culpa saepe cumque consequuntur maxime. Inventore
        nisi aut saepe repudiandae labore? Eius autem mollitia voluptates, culpa
        sed impedit, labore possimus, delectus reprehenderit consequuntur
        pariatur odio a illo fugit! Voluptates nulla doloremque eum. Voluptatum
        corrupti velit illo unde reprehenderit dolor, voluptates consequuntur
        dolorem esse provident quae. Illum laboriosam atque, neque magni
        blanditiis ducimus, architecto inventore, fugit asperiores quis
        accusantium. Atque nesciunt minima doloribus officiis magni harum
        veritatis excepturi iure laboriosam suscipit ipsa labore, perferendis
        ullam delectus a nostrum explicabo est aspernatur et repellat. Enim
        atque, eveniet illum cupiditate laborum voluptatem dolor sapiente fugit!
        Magnam omnis facilis, architecto debitis itaque autem.
      </p>
    </div>
  );
}
export default page;
