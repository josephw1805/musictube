"use client";

import { cn } from "@/lib/utils";
import { trpc } from "@/trpc/client";
import { Suspense, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import dynamic from "next/dynamic";
import { VideoBanner } from "../components/video-banner";
import { VideoTopRow, VideoTopRowSkeleton } from "../components/video-top-row";
import { VideoPlayerSkeleton } from "@/modules/videos/ui/components/video-player";

interface VideoSectionProps {
  videoId: string;
}

export const VideoSection = ({ videoId }: VideoSectionProps) => {
  return (
    <Suspense fallback={<VideoSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <VideoSectionSuspense videoId={videoId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const VideoSectionSkeleton = () => {
  return (
    <>
      <VideoPlayerSkeleton />
      <VideoTopRowSkeleton />
    </>
  );
};

const VideoPlayer = dynamic(
  () =>
    import("@/modules/videos/ui/components/video-player").then(
      (mod) => mod.VideoPlayer
    ),
  {
    ssr: false,
  }
);

const VideoSectionSuspense = ({ videoId }: VideoSectionProps) => {
  const hasFiredRef = useRef(false);
  const utils = trpc.useUtils();
  const [video] = trpc.videos.getOne.useSuspenseQuery({ id: videoId });
  const createView = trpc.videoViews.create.useMutation({
    onSuccess: () => {
      utils.videos.getOne.invalidate({ id: videoId });
    },
  });

  const handlePlay = () => {
    return () => {
      if (hasFiredRef.current) {
        return;
      }

      hasFiredRef.current = true;

      createView.mutate({ videoId });
    };
  };

  return (
    <>
      <div
        className={cn(
          "aspect-video bg-black rounded-xl overflow-hidden relative",
          video.muxStatus !== "ready" && "rounded-b-none"
        )}
      >
        <VideoPlayer
          onPlay={handlePlay()}
          playbackId={video.muxPlaybackId}
          thumbnailUrl={video.thumbnailUrl}
          assetId={video.muxAssetId}
        />
      </div>
      <VideoBanner status={video.muxStatus} />
      <VideoTopRow video={video} />
    </>
  );
};
