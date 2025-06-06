import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Albums",
  "Compilations",
  "Music Video",
  "Live Performance",
  "Original Soundtrack",
  "Singles",
];

async function main() {
  console.log("Seeding categories");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
    console.log("Categories seeded successfully");
  } catch (error) {
    console.log("Error seeding categories", error);
    process.exit(1);
  }
}

main();
