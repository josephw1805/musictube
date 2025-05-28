import { DEFAULT_LIMIT } from "@/constants";
import { StudeioView } from "@/modules/studio/ui/views/studio-view";
import { HydrateClient, trpc } from "@/trpc/server";

const Page = async () => {
  void trpc.studio.getMany.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });
  return (
    <HydrateClient>
      <StudeioView />
    </HydrateClient>
  );
};

export default Page;
