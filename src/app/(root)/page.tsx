"use client";
import React from "react";
import { Song } from "@/lib/zustand";
function page() {
  const song = Song((state: any) => state.song);
  const updateSong = Song((state: any) => state.updateSong);
  return (
    <div className="w-full">
      <main className="flex-1">
        <h1>Song of the week</h1>
        <button
          onClick={() =>
            updateSong({
              song_name: "https://s3.tebi.io/test1345/outputf.m3u8",
            })
          }
          className="bg-red-900 ml-5"
        >
          Explore more
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          fuga sapiente veritatis veniam totam! Nostrum, recusandae. Illum modi
          odit aliquid impedit. Nulla explicabo illo sed, libero dolores
          aspernatur doloribus quam, aliquam molestias eum ea velit animi qui
          nobis, dolore ipsum ipsam esse vero corporis? Natus in, vel ipsa vitae
          debitis rerum laborum quis necessitatibus suscipit? Reiciendis at
          labore, ut nobis neque aperiam enim eos exercitationem impedit ipsam
          odit eveniet sapiente quos facilis velit quam unde itaque dicta.
          Officiis aut placeat eveniet molestiae soluta labore reprehenderit
          nobis, blanditiis provident aspernatur ad quidem magni ab doloremque
          numquam sequi magnam. Eligendi maxime amet, voluptates distinctio id
          quam labore et aperiam? Fugit et veniam eius alias, fuga autem quis
          qui laudantium error magni provident dolor delectus, veritatis illo at
          sequi ipsam sit. Et expedita harum alias sapiente rem unde autem
          praesentium earum minima aperiam vero esse dolore, aliquam itaque modi
          id. Vel laudantium illum, aliquid in harum illo, officia blanditiis,
          aliquam repellendus aperiam esse. Sequi, voluptatibus quos alias in
          iure vitae consectetur reiciendis fugit tenetur accusantium, officiis
          mollitia! Dolor illo natus voluptates voluptatem! Non illum optio iste
          magnam odio dignissimos, quae praesentium quia voluptatem placeat
          dolore rerum ullam explicabo excepturi. Voluptates, alias illo? Quis,
          repellendus, expedita officia sapiente asperiores quaerat porro
          eligendi quisquam fuga molestias odit ipsa animi! Soluta adipisci
          accusamus cupiditate? Voluptate id voluptatum, quibusdam esse quaerat
          cum voluptates sint aspernatur doloremque eius ratione qui nostrum,
          sit tempora quasi beatae consequuntur! Perspiciatis deleniti magni eum
          a dignissimos impedit ex et. Necessitatibus dolorem vitae nihil
          architecto! Cumque enim iste, minima, quas reiciendis, dicta voluptas
          repudiandae autem accusamus eaque repellat aliquid veritatis rerum
          ipsa sunt ipsam earum beatae tempora porro consectetur odit ea. Quidem
          rerum asperiores reiciendis dolorem soluta pariatur nostrum,
          dignissimos veritatis ad sunt harum quasi nisi adipisci magnam atque,
          labore ipsam quam accusamus consequatur nobis sint. Beatae praesentium
          hic aspernatur nobis quas quidem eveniet voluptas. Tempora facere vel
          obcaecati odit possimus dolore sint rerum iure ratione laudantium
          impedit architecto mollitia velit aliquam harum culpa natus fugiat
          molestiae aut ut, id, maxime dicta! Modi tenetur est laudantium. Modi
          corrupti repellat quis consectetur sed recusandae nesciunt voluptate
          aspernatur fugiat explicabo impedit, deleniti dolores unde dolor fuga
          quaerat repellendus quae ea perspiciatis natus voluptas temporibus
          eius, voluptatum asperiores. Corrupti sed facere praesentium quo
          voluptatem libero sint ipsa architecto, maxime nisi quis, explicabo
          quia expedita nulla obcaecati eaque. Ab quos omnis, doloremque
          debitis, laborum asperiores cumque rerum expedita amet, voluptatum
          sapiente blanditiis magni delectus deserunt suscipit. Eligendi
          incidunt aliquid pariatur saepe eum nemo atque distinctio autem
          quibusdam vel? Repellendus totam impedit dolorum rem corrupti eum
          voluptate itaque, soluta facilis molestias incidunt nesciunt ducimus
          harum consequatur voluptas suscipit excepturi enim error possimus
          sapiente quisquam quod ipsa! Eaque exercitationem quis non minima
          rerum minus, ipsa veritatis facilis ullam numquam consequatur
          voluptatibus pariatur suscipit voluptas unde. Sit quisquam ipsam illo
          alias, officiis quo aliquid eius eveniet nostrum. Nisi, inventore
          quisquam. Rem, dolore vel aperiam fuga et recusandae soluta cum
          numquam saepe explicabo neque ducimus. Molestias nam deleniti
          voluptates eius, provident blanditiis voluptate quos asperiores id
          numquam facilis cum, perferendis quas adipisci nostrum quia assumenda
          sed voluptas dolorem ut! Corporis deleniti atque praesentium
          aspernatur quo sed qui ducimus odio non asperiores. Omnis, labore nam
          eius autem ab consectetur eum consequatur est unde optio praesentium
          reiciendis nesciunt ad, consequuntur corporis quibusdam id. Harum
          earum sequi nam! Repellendus quisquam repellat aperiam, quam molestias
          unde quae odio in, commodi iste ex distinctio necessitatibus iusto
          cumque maiores ratione ea ad deserunt. Error, nisi! Dolores similique
          earum, veritatis illum labore tempora quo aperiam molestiae sed
          necessitatibus magnam quisquam ut blanditiis debitis vitae? Architecto
          consectetur itaque qui quo vel laboriosam, cumque recusandae in omnis
          ab iste unde necessitatibus dolorum dolor! Quo aut, eius sed amet
          accusamus consequuntur expedita natus aliquid nisi veritatis, quidem,
          porro qui deserunt quisquam perferendis eligendi quis facilis et
          debitis. Corporis maxime reiciendis, consectetur quaerat optio
          exercitationem totam modi, hic libero quia esse ad quae placeat? Ut
          sit sed blanditiis adipisci labore nobis neque itaque aliquam error
          cumque dolorem obcaecati natus molestias quae qui soluta nesciunt
          culpa sint veniam alias cum iure, assumenda eligendi? Rerum
          perferendis cumque doloremque modi delectus! Nulla laborum repellendus
          quam rerum placeat corporis omnis obcaecati autem. Id est veritatis
          sint, fuga totam mollitia natus omnis quaerat illo rem! Facere
          pariatur voluptates eaque minima consequatur eos ex fugiat eveniet
          alias iure. Aut, ab labore hic ipsa illum perferendis. Odit autem
          aperiam impedit blanditiis fuga consequuntur ea. Placeat excepturi sit
          quos possimus voluptatem magnam explicabo? Maiores quaerat harum
          error? Officiis ut sit asperiores maxime iure nostrum maiores
          cupiditate veritatis sunt labore quo corrupti ea suscipit voluptates
          eum reprehenderit nam, non praesentium nulla laborum corporis
          consectetur quibusdam blanditiis. Similique reiciendis repellat
          corporis nisi animi, nam rerum quod! Ea illo non recusandae neque
          inventore eaque facilis sed quas, similique earum fugit quidem velit,
          culpa laudantium tempore tenetur architecto saepe vero debitis
          voluptates nisi nam! Quisquam impedit accusamus temporibus in, labore
          quas nulla pariatur ex aliquid delectus, vitae nihil veniam. Quas unde
          voluptates totam eius nesciunt dolores, omnis nostrum, reprehenderit
          nemo impedit ratione, esse ea! Possimus animi ea aperiam, illo esse
          reiciendis odio? Distinctio consequatur fugit expedita inventore
          praesentium omnis minima aspernatur similique? Sapiente, dignissimos
          fugit. Dolor debitis animi nihil earum rerum mollitia vel autem quam,
          modi quidem aspernatur reiciendis, nam, sapiente numquam eos! Id quas
          sed esse quasi accusantium unde error reiciendis vero explicabo
          pariatur quis delectus iusto molestiae, eos harum veniam. Illo error
          alias pariatur et libero nostrum quas voluptatem necessitatibus magni
          in soluta tempora incidunt repellendus id, delectus assumenda quae
          ducimus distinctio quidem minus dolorum dolores? Repudiandae, cum
          tempore. Rerum laborum eligendi tempore necessitatibus architecto
          itaque est accusantium atque sint voluptate dolorem possimus fugiat
          eveniet, repudiandae iusto cum distinctio doloremque vero consectetur.
          Esse itaque saepe maxime, eos facilis eveniet assumenda accusamus rem
          iure eaque nostrum aliquam pariatur. Illum dignissimos alias pariatur
          consequuntur cum. Ea eveniet quas, velit harum sequi beatae quisquam
          consequuntur deleniti consequatur quod! Pariatur ab nisi, maiores at
          quisquam praesentium eius. Quos cumque impedit quibusdam maiores.
          Harum qui dolore esse.
        </p>
        <div className=""></div>
        <h1>Song playlist</h1>
        <p>Laudantium.</p>
        <div className="topSongContain"></div>
        {/* <button 
          onClick={()=>updateSong(
             {
                song_name : 'https://s3.tebi.io/test1345/outputf.m3u8'
             }
          )}
          className='bg-red-900 ml-5'>Explore more</button> */}
        {/* <button 
          onClick={()=>updateSong(
             {
                song_name : '/Akon - Lonely(MP3_160K).mp3'
             }
          )
        }
          className='bg-red-900 ml-5'>Explore next</button> */}
      </main>
    </div>
  );
}
export default page;
