"use server";

import { z } from "zod";
import { zact } from "zact/server";
import { prisma } from "../db";

export const exampleAction = zact(z.object({ name: z.string().min(6) }))(
  async (input) => {
    const examples = await prisma.post.findMany();
    return { message: `hello ${input.name}`, examples: examples };
  },
);
