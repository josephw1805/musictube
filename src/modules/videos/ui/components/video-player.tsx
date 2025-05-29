"use client";

import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import dynamic from "next/dynamic";

import "video.js/dist/video-js.css";
import "@videojs/themes/dist/city/index.css";
import { THUMBNAIL_FALLBACK } from "../../constants";

interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  assetId?: string | null | undefined;
  thumbnailUrl?: string | null | undefined;
  autoPlay?: boolean;
  onPlay?: () => void;
}

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
});

export const VideoPlayer = ({
  playbackId,
  assetId,
  thumbnailUrl,
  autoPlay = false,
  onPlay,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (!assetId && videoRef.current && !playerRef.current) {
      timeout = setTimeout(() => {
        if (videoRef.current && !playerRef.current) {
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

          playerRef.current.ready(() => {
            setIsLoading(false);
          });
        }
      }, 0);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [assetId, autoPlay, onPlay]);

  if (!playbackId) {
    return <div className="w-full h-40 bg-gray-100 rounded-lg" />;
  }

  return (
    <div className="w-full min-h-24 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10 rounded-lg">
          <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin" />
        </div>
      )}

      {assetId ? (
        <MuxPlayer
          playbackId={playbackId}
          poster={thumbnailUrl || THUMBNAIL_FALLBACK}
          playerInitTime={0}
          autoPlay={autoPlay}
          thumbnailTime={0}
          className="w-full h-full object-contain"
          accentColor="#FF2056"
          onPlay={onPlay}
          onCanPlay={() => setIsLoading(false)}
        />
      ) : (
        <video
          ref={videoRef}
          className="video-js vjs-theme-city w-full h-full rounded-lg"
          controls
          preload="auto"
          poster={thumbnailUrl || THUMBNAIL_FALLBACK}
          autoPlay={autoPlay}
          playsInline
          aria-label="Video player"
        >
          <source src={playbackId} />
          Your browser does not support FLAC audio playback.
        </video>
      )}
    </div>
  );
};
