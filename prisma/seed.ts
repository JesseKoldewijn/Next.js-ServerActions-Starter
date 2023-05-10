/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { v4 } from "uuid";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const examplesData = [
    {
      title: "example 1",
      desc_short: "Informational website for my own company.",
      content: "Lorem ipsum 1",
    },
    {
      title: "example 2",
      content: "Lorem ipsum 2",
    },
  ] as const;

  const seedDB = async () => {
    await Promise.all(
      examplesData.map(async (postItem) => {
        const id = v4();
        const existingItem = await prisma.post.findFirst({
          where: {
            title: postItem.title,
          },
        });
        if (existingItem !== null) {
          await prisma.post.update({
            where: {
              id: id,
            },
            data: {
              title: postItem.title,
              content: postItem.content,
            },
          });
        } else {
          await prisma.post.upsert({
            where: {
              id: id,
            },
            update: {},
            create: {
              id: id,
              title: postItem.title,
              content: postItem.content,
            },
          });
        }
      }),
    );
  };

  await seedDB();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
