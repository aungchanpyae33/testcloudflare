"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchSegement } from "@/lib/MediaSource/fetchSegement";
import { Song } from "@/lib/zustand";
import { getRemainingBufferDuration } from "@/lib/MediaSource/getRemainBuffer";
import AudioElement from "./audio/AudioElement";
import DataContext from "@/lib/MediaSource/ContextMedia";
import ToggleButton from "./audio/ToggleButton";
import TimeIndicatorDur from "./audio/TimeIndicatorDur";

const mimeType_audio = "audio/mp4";
const codecs_audio = "mp4a.40.2";
const mimeCodec_audio = `${mimeType_audio};codecs="${codecs_audio}"`;

const bufferThreshold = 0.8;

function AudioPlayer() {
  const duration = Song((state: any) => state.songCu.duration);
  const maxSegNum = Song((state: any) => state.songCu.sege);

  const [, url] = Song(
    (state: any) =>
      Object.entries(state.songCu as Record<string, string>)[0] || []
  );

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
  console.log("render audioPlayer");
  const loadNextSegment = useCallback(() => {
    const remainingBuffer = getRemainingBufferDuration(dataAudio);
    if (bufferThreshold > remainingBuffer && segNum.current < maxSegNum) {
      fetchAudioSegment(segNum.current);
      segNum.current++;
    }
  }, [fetchAudioSegment, maxSegNum]);

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
    if (!url) {
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
  }, [startUp, loadNextSegment, sourceOpen, url]);

  return (
    <DataContext.Provider
      value={{
        dataAudio,
        loadNextSegment,
        segNum,
        maxSegNum,
        duration,
      }}
    >
      <AudioElement
        firstChild={<ToggleButton />}
        secondChild={<TimeIndicatorDur duration={duration} />}
      ></AudioElement>
    </DataContext.Provider>
  );
}

export default AudioPlayer;
