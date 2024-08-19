"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchSegement } from "@/lib/MediaSource/fetchSegement";
import { Song } from "@/lib/zustand";
import { getRemainingBufferDuration } from "@/lib/MediaSource/getRemainBuffer";
import AudioElement from "./audio/AudioElement";
import DataContext from "@/lib/MediaSource/ContextMedia";
import AudioSeekBar from "./audio/AudioSeekBar";
import ToggleButton from "./audio/ToggleButton";
import TimeIndicator from "./audio/TimeIndicator";
export interface PropTime {
  cur: number;
  durationTime: number | undefined;
}

const mimeType_audio = "audio/mp4";
const codecs_audio = "mp4a.40.2";
const mimeCodec_audio = `${mimeType_audio};codecs="${codecs_audio}"`;

const maxSegNum = 28;
const bufferThreshold = 0.8;

function AudioPlayer() {
  const song = Song((state: any) => state.song);

  const url = song.song_name;
  const segNum = useRef(1);
  const dataAudio = useRef<HTMLAudioElement | null>(null);

  const mediaSource = useRef<MediaSource | null>(null);
  const sourceBuffer = useRef<SourceBuffer | null>(null);

  const fetchAudioSegment = useCallback(
    (segNum: number) => {
      fetchSegement(url, sourceBuffer, segNum);
    },
    [url]
  );

  const loadNextSegment = useCallback(() => {
    const remainingBuffer = getRemainingBufferDuration(dataAudio);
    if (bufferThreshold > remainingBuffer && segNum.current < maxSegNum) {
      fetchAudioSegment(segNum.current);
      segNum.current++;
    }
  }, [fetchAudioSegment]);

  const sourceOpen = useCallback(() => {
    sourceBuffer.current =
      mediaSource.current!.addSourceBuffer(mimeCodec_audio);
    fetchSegement(url, sourceBuffer);
    sourceBuffer.current!.addEventListener("updateend", loadNextSegment);
    dataAudio.current!.addEventListener("timeupdate", loadNextSegment);
  }, [loadNextSegment, url]);

  const startUp = useCallback(() => {
    mediaSource.current!.addEventListener("sourceopen", sourceOpen, false);
    dataAudio.current!.src = URL.createObjectURL(mediaSource.current!);
  }, [sourceOpen]);

  useEffect(() => {
    const dataAudioCopy = dataAudio.current!;
    if (song.song_name.length < 1) {
      return;
    }
    if (typeof window !== "undefined") {
      const MediaSource = window.MediaSource || null;
      mediaSource.current = new MediaSource();
      startUp();
      segNum.current = 1;
    }

    return () => {
      if (sourceBuffer.current) {
        sourceBuffer.current.removeEventListener("updateend", loadNextSegment);
      }
      dataAudioCopy.removeEventListener("timeupdate", loadNextSegment);
      dataAudioCopy.removeEventListener("sourceopen", sourceOpen);
    };
  }, [startUp, loadNextSegment, sourceOpen, song.song_name]);

  const dataInput = useRef<HTMLInputElement>(null);
  const dataCur = useRef<HTMLSpanElement>(null);
  const [duration, setDuration] = useState<PropTime>({
    cur: 0,
    durationTime: 0,
  });

  const [bottom, setBottom] = useState(true);

  return (
    <DataContext.Provider
      value={{
        dataAudio,
        dataCur,
        setDuration,
        bottom,
        dataInput,
        setBottom,
        loadNextSegment,
        segNum,
        duration,
      }}
    >
      <AudioElement />

      <div className="flex justify-between">
        <ToggleButton />
        <TimeIndicator data="currentTime" />
        <AudioSeekBar />
        <TimeIndicator data={"duration"} />
      </div>
    </DataContext.Provider>
  );
}

export default AudioPlayer;
