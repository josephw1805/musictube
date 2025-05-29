import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadDropzone } from "@/lib/uploadthing";
import { trpc } from "@/trpc/client";

interface ThumbnailUploadModalProps {
  videoId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ThumbnailUploadModal = ({
  videoId,
  open,
  onOpenChange,
}: ThumbnailUploadModalProps) => {
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.studio.getMany.invalidate();
    utils.studio.getOne.invalidate({ id: videoId });
    onOpenChange(false);
  };
  return (
    <ResponsiveModal
      title="Upload a thumbnail"
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Please upload a high-quality thumbnail image (JPG, PNG, or WebP).
        </p>

        <div className="rounded-2xl border border-dashed border-muted p-6">
          <UploadDropzone
            endpoint="thumbnailUploader"
            input={{ videoId }}
            onClientUploadComplete={onUploadComplete}
            className="ut-upload-dropzone w-full h-48 flex items-center justify-center text-muted-foreground"
            appearance={{
              button:
                "bg-primary text-white hover:bg-primary/90 transition rounded-md px-4 py-2 mt-4",
              label: "text-sm",
            }}
          />
        </div>
      </div>
    </ResponsiveModal>
  );
};
