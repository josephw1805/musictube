"use client";

import { useEffect, useRef, useMemo } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";

import "video.js/dist/video-js.css";
import "@videojs/themes/dist/city/index.css";
import { THUMBNAIL_FALLBACK } from "../../constants";

interface VideoPlayerProps {
  playbackId?: string | null;
  thumbnailUrl?: string | null;
  autoPlay?: boolean;
  onPlay?: () => void;
  assetId?: string | null;
}

export const VideoPlayer = ({
  playbackId,
  thumbnailUrl,
  autoPlay = false,
  onPlay,
  assetId,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  // Determine video source and mime type
  const { videoSource, sourceType } = useMemo(() => {
    if (assetId && playbackId) {
      const source = `https://stream.mux.com/${playbackId}.m3u8`;
      return { videoSource: source, sourceType: "application/x-mpegURL" };
    }

    return { videoSource: playbackId ?? "", sourceType: undefined };
  }, [playbackId, assetId]);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !videoRef.current ||
      !videoSource ||
      playerRef.current
    )
      return;

    const id = setTimeout(() => {
      if (!videoRef.current) return;

      playerRef.current = videojs(videoRef.current, {
        autoplay: autoPlay,
        controls: true,
        preload: "auto",
        responsive: true,
        fluid: true,
      });

      if (onPlay) {
        playerRef.current.on("play", onPlay);
      }
    }, 0);

    return () => {
      clearTimeout(id);
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoSource, autoPlay, onPlay]);

  return (
    <div className="w-full min-h-24 relative" style={{ minHeight: 180 }}>
      <video
        ref={videoRef}
        className="video-js vjs-theme-city w-full h-full rounded-lg"
        preload="auto"
        poster={thumbnailUrl || THUMBNAIL_FALLBACK}
        playsInline
        controls
        role="application"
        aria-label="Video player"
      >
        {videoSource && (
          <source
            src={videoSource}
            {...(sourceType ? { type: sourceType } : {})}
          />
        )}
        Your browser does not support video playback.
      </video>
    </div>
  );
};
