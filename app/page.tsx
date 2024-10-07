import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-0">
      <div className="flex flex-col min-h-screen justify-center items-center space-y-8">
        <Card className="relative overflow-hidden max-w-lg">
          <CardHeader>
            <CardTitle className="text-6xl">Memora Vault</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p>
              Memora Vault is an app designed to help users easily save and
              preserve their most cherished memories.
            </p>
            <p>
              Whether it is personal stories, important life events, or
              meaningful moments, Memora Vault provides a simple and secure
              platform where you can store your memories
            </p>
          </CardContent>
          <Meteors number={20} />
        </Card>
        <Link href="/posts"><Button className="px-14 py-6">Explore</Button></Link>
        <ThemeToggle/>
      </div>
    </div>
  );
}
