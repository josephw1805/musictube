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

## PART 15 AI thumbnails 🤖

- Create thumbnail prompt modal
- Create thumbnail generation workflow
- Add skeleton to form-section loading state

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
