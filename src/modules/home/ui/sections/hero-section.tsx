export const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mx-auto p-2 flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg">
          Hey, Welcome
        </span>
        <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Discover Your Sound at <br /> Music Place
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          &quot;Curated Recommendations for Every Music Lover&apos;s Journey.
          <br />
          Listen, Explore, and Enjoy the Best of Music with Ease.&quot;
        </p>
      </div>
    </section>
  );
};
