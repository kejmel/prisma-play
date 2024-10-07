import AddPostDialog from "@/components/dialogs/AddPostDialog";
import GuestLayout from "@/components/layouts/GuestLayout";
import { PrismaClient } from "@prisma/client";
import { Card } from "@/components/ui/card";

const prisma = new PrismaClient();

export default async function Posts() {

  console.log("DATABASE_URL:", process.env.DATABASE_URL);
  
  const posts = await prisma.post.findMany();

  return (
    <GuestLayout>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          {posts.length > 0 ? (
            <h1 className="text-xl">Add new post</h1>
          ) : (
            <h1 className="text-xl">No posts yet</h1>
          )}
          <AddPostDialog />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col items-center justify-center shadow-lg min-h-40 cursor-pointer"
            >
              <h1 className="text-2xl">{post.title}</h1>
              <p>{post.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </GuestLayout>
  );
}
