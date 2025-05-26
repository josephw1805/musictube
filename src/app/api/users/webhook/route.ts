import { db } from "@/db";
import { users } from "@/db/schema";
import { UserJSON } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const eventType = evt.type;
    const { data } = evt as { data: UserJSON };

    switch (eventType) {
      case "user.created":
        await db.insert(users).values({
          clerkId: data.id,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        });
        break;
      case "user.deleted":
        if (!data.id) {
          return new Response("Missing user id", { status: 400 });
        }
        await db.delete(users).where(eq(users.clerkId, data.id));
        break;
      case "user.updated":
        await db
          .update(users)
          .set({
            name: `${data.first_name} ${data.last_name}`,
            imageUrl: data.image_url,
          })
          .where(eq(users.clerkId, data.id));
      default:
        break;
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
