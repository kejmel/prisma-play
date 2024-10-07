"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
export async function createPost(title: string, content: string) {
  // todo auth check
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: 1,
        published: true,
      },
    });
    return { success: true, post };
  } catch (error) {
    console.error("Failed to create post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

