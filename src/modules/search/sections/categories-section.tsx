"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
  categoryId?: string;
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <p className="p-4 text-center text-red-500">
            {error.message || "Something went wrong."}
          </p>
        )}
      >
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSkeleton = () => {
  return <FilterCarousel isLoading data={[]} onSelect={() => {}} />;
};

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const router = useRouter();

  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  const onSelect = (value: string | null) => {
    const params = new URLSearchParams(window.location.search);

    if (value) {
      params.set("categoryId", value);
    } else {
      params.delete("categoryId");
    }

    const query = params.toString();
    const path = query ? `?${query}` : "/";
    router.push(path);
  };

  return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />;
};
