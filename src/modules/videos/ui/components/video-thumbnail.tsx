import { formatDuration } from "@/lib/utils";
import Image from "next/image";
import { THUMBNAIL_FALLBACK } from "../../constants";

interface VideoThumbnailProps {
  title: string;
  duration: number;
  imageUrl?: string | null;
  previewUrl?: string | null;
}

export const VideoThumbnail = ({
  title,
  duration,
  imageUrl,
  previewUrl,
}: VideoThumbnailProps) => {
  return (
    <div className="relative group">
      {/* Thumbnail wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        {previewUrl ? (
          <>
            <Image
              src={imageUrl || THUMBNAIL_FALLBACK}
              alt={title}
              fill
              className="size-full object-cover group-hover:opacity-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              unoptimized={!!previewUrl}
              src={previewUrl || THUMBNAIL_FALLBACK}
              alt={title}
              fill
              className="size-full object-cover opacity-0 group-hover:opacity-100"
            />
          </>
        ) : (
          <Image
            src={imageUrl || THUMBNAIL_FALLBACK}
            alt={title}
            fill
            className="size-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      {/* Video duration box */}
      {duration !== 0 && (
        <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-xs font-medium">
          {formatDuration(duration)}
        </div>
      )}
    </div>
  );
};
