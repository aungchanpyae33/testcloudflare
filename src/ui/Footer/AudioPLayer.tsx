"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Song } from "@/lib/zustand";
import HlsPlaySong from "@/lib/HlsPlayer";
import { TimeFormat } from "@/lib/TimeFormat";

interface propTime {
  cur: number;
  duration: number | undefined;
}
function AudioPLayer() {
  console.log("render");
  const dataAudio = useRef<HTMLAudioElement>(null);
  const dataInput = useRef<HTMLInputElement>(null);
  const dataCur = useRef<HTMLSpanElement>(null);
  const [duration, setduration] = useState<propTime>({
    cur: 0,
    duration: 0,
  });
  const [play, setplay] = useState(false);
  const [bottom, setbottom] = useState(true);
  const testRef = useRef<HTMLAudioElement>(null);
  const updateSong = Song((state: any) => state.updateSong);
  const song = Song((state: any) => state.song);

  useEffect(() => {
    HlsPlaySong({ url: song.song_name, audioElement: dataAudio.current });
  }, [song.song_name]);
  return (
    <div className="">
      <audio
        hidden
        ref={dataAudio}
        autoPlay
        onLoadedMetadata={(e) => {
          console.log(dataAudio.current?.duration);
          setduration({
            cur: 0,
            duration: dataAudio.current?.duration,
          });
        }}
        onTimeUpdate={(e) => {
          if (bottom) {
            dataInput.current!.value = e.currentTarget.currentTime.toString();
            dataCur.current!.textContent = TimeFormat(
              +e.currentTarget.currentTime
            );
          }
        }}
      ></audio>

      <div className="flex justify-between">
        <button
          onClick={() => {
            if (!play) {
              dataAudio.current?.play();
              // requestAnimationFrame(whilePlaying);
              setplay(true);
            } else {
              dataAudio.current?.pause();
              // cancelAnimationFrame(raf.current);
              setplay(false);
            }
          }}
          id="play-icon"
        >{`${play ? "pause" : "play"}`}</button>
        <span id="current-time" ref={dataCur} className="time bg-red-500">
          {TimeFormat(duration.cur)}
        </span>
        <input
          type="range"
          id="seek-slider"
          ref={dataInput}
          max={duration.duration}
          className="w-[50%]"
          onMouseUp={(e) => {
            setbottom(true);
            dataAudio.current!.currentTime = +e.currentTarget.value;
            console.log(dataAudio.current!.currentTime);
          }}
          onTouchEnd={(e) => {
            setbottom(true);
            dataAudio.current!.currentTime = +e.currentTarget.value;
          }}
          onTouchStart={() => {
            setbottom(false);
          }}
          onInput={(e) => {
            dataCur.current!.textContent = TimeFormat(+e.currentTarget.value);
          }}
          onMouseDown={() => {
            setbottom(false);
          }}
        />
        <span id="duration" className="time bg-red-500">
          {TimeFormat(duration.duration)}
        </span>
      </div>
    </div>
  );
}

export default AudioPLayer;
