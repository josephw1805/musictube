## PART 0 Basic Setup ❤️

- Configure environment
- runtime (Bun)
- package manager (bun)
- Why bun ?
  - Easily run Typescript scripts with ES6 imports
  - Less issues with depency issues regarding React 19

## PART 1 Basic layout 🌟

- Add logo asset ✅
- Basic app router setup ✅
- Sidebar component ✅
  - Sidebar sections ✅
  - Sidebar items ✅
- Navbar ✅
  - Search input ✅
  - Sign in component ✅

## PART 2 Authentication 🌸

- Integrate clerk ✅
- Add Sign in screens ✅
- Add UserButton ✅
- Add middleware ✅
- Use auth state on sidebar sections ✅
- Protect routes ✅

## PART 3 Database setup 🌵

- Create a PostgreSQL database ✅
- Setup DrizzleORM ✅
- Create users schema ✅
- Migrate changes to database ✅
- Why DrizzleORM ? ✅
  - Only ORM with both relational and SQL-like query APIs
  - Serverless by default
  - understand the queries

## PART 4 Webhook sync 🌈

- Create ngrok account ✅
- Obtain a static domain ✅
- Add script to concurrently run local tunnel & app ✅
- create the users webhook ✅
- Connect the webhook on Clerk dashboard ✅

## PART 5 tRPC setup 🌴

- why tRPC ?
  - end-to-end typesafety
  - familiar hooks (useQuery, useMutation etc.)
  - authenticated prefetching
- Why prefetch ?
  - "render as you fetch" concept
  - leverage react server components as "loaders"
  - faster load time
  - parallel data loading
  ### Next.js Server-first Data Pattern
  ![Screenshot](trpcnext.svg)

## PART 6 tRPC configuration 🍉

- Enable transformer on tRPC ✅
- Add auth to tRPC context ✅
- Add protectedProcedure ✅
- Add rate limiting ✅

## PART 7 Video categories 🛸

- Create categories schema ✅
- Push changes to the database ✅
- Seed categories ✅
- Organize tRPC routers ✅
- Prefetch categories ✅
- Create categories component ✅

## PART 8 Studio layout 🍩

- Create studio route group ✅
- Create studio layout ✅
- Protect studio routes ✅

## PART 9 Studio videos 🍣

- Create videos Schema ✅
- Push database changes ✅
- Create studio procedures ✅
- Add video record creation ✅

## PART 10 Infinite loading 🍄

- Add suspense and error boundaries ✅
- Create reuseable InfiniteScroll component ✅

## PART 11 Mux integration 🍓

- Create a responsive dialog ✅
- Create upload modal ✅

## PART 12 Mux webhooks 🍊

- Update video Schema ✅
- Handle "video.asset.ready" event ✅
  - assign thumbnail ✅
  - assign preview ✅
- Handle "video.asset.errored" event ✅
  - update status ✅
- Handle "video.asset.deleted" event ✅
  - delete from database ✅
- Handle "video.asset.track.ready" event ✅
  - update trackId and trackStatus ✅

## PART 13 Video form 🐸

- Add skeleton to videos-section ✅
- Create video form page ✅
- Create video player ✅
- Add ability to update video information ✅
  (Title, Description, Category, Visiblity)

## PART 14 Video thumbnails 🪼

- Integrate UploadThing ✅
- Add thumbnail upload functionality ✅
- Add thumbnail restore functionality ✅
- Refactor thumbnail fields in the schema ✅
  - Proper UploadThing cleanup ✅

## PART 15 AI background jobs 🧠

- Why background jobs ?
  - avoid timeout from long-running tasks
    - problematic with AI generations
  - ensure retries in case of failure
- Integrate Upstash workflow ✅
- Trigger a background job ✅
- Add background jobs for AI ✅
  - Generate title ✅
  - Generate description ✅
  - Generate thumbnail

## PART 16 AI thumbnails 🤖

- Create thumbnail prompt modal ✅
- Create thumbnail generation workflow ✅
- Add skeleton to form-section loading state ✅

## PART 17 Video page 🪴

- Create video "getOne" procedure ✅
  - Inner-join "users" (author informaiton) ✅
- Prefetching process ✅
- Video section ✅
- Comments section (Placeholder) ✅
- Suggestions section (Placeholder) ✅

## PART 18 Video views 🎱

- Create video views schema ✅
- Combine video views for "getOne" videos procedure ✅
- Create video views creation procedure ✅
- Trigger video view creation on video play ✅

## PART 19 Video reactions 🥝

- Create video reactions schema ✅
- Combine video reactions for "getOne" videos procedure ✅
- Create video reactions like & dislike procedure ✅
- Connect videoReactions component with new API ✅

## PART 20 Subscriptions 🦒

- Create subscriptions schema ✅
- Combine subscriptions for "getOne" videos procedure ✅
- Create subscriptions procedures ✅
- Create subscriptionButton component with new API ✅

## PART 21 Comments 🍔

- Create comments schema ✅
- Create comments procedures ✅
- Create comments section ✅

## PART 22 Comments infinite loading 🍒

- Modify comments "getMany" procedure ✅
- Change prefetch() to prefetchInfinite() ✅
- Change suspense() to useSuspenseInfiniteQuery() ✅
- Add InfiniteLoading component ✅

## PART 23 Comments reactions 🦀

- Add "commentReactions" schema ✅
- Create comment reactions UI ✅
- Combine "commentReactions" with comments "getMany procedure ✅

## PART 24 Comment replies 🚁

- Extend comment schema by adding "parentId" foreign key ✅
- Create UI for replies ✅
- Modify comments "getMany" procedure by combining parentId ✅
- Create variants for "CommentItem" component ✅
- Create variants for "CommentForm" component ✅
- Create CommentReplies component ✅

## PART 25 Suggestions 🍸

- Compact VideoRowCard
  - suggestions
  - playlist items
  - small devices
- Regular videoRowCard
  - search result
  - large devices
- VideoGridCard
  - Feed grids
  - fallback for small devices
- Create suggestions procedure
- Prefetch suggestions
- Create videoRowCard and videoGridCard components
- Connect Suggestions section with new API

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
