import { SubscriptionVideoSection } from "../sections/subscription-videos-section";

export const SubscriptionView = () => {
  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <div>
        <h1 className="text-2xl font-bold">Subscription</h1>
        <p className="text-xl text-muted-foreground">
          Videos from your favorite creators
        </p>
      </div>
      <SubscriptionVideoSection />
    </div>
  );
};
