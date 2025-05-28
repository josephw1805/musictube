import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Music",
  "Gaming",
  "Education",
  "Entertainment",
  "Vlogs",
  "Technology",
  "Beauty & Fashion",
  "Sports",
  "News & Politics",
  "Film & Animation",
  "Food & Cooking",
  "Science & Nature",
  "Health & Wellness",
  "Autos & Vehicles",
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
