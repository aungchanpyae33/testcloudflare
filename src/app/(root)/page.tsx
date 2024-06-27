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
          necessitatibus architecto itaque est accusantium atque sint voluptate
          dolorem possimus fugiat eveniet, repudiandae iusto cum distinctio
          doloremque vero consectetur. Esse itaque saepe maxime, eos facilis
          eveniet assumenda accusamus rem iure eaque nostrum aliquam pariatur.
          Illum dignissimos alias pariatur consequuntur cum. Ea eveniet quas,
          velit harum sequi beatae quisquam consequuntur deleniti consequatur
          quod! Pariatur ab nisi, maiores at quisquam praesentium eius. Quos
          cumque impedit quibusdam maiores. Harum qui dolore esse.
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
