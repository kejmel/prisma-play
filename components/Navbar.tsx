"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Vault } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-background border-b border-border">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-3 text-2xl text-primary hover:text-primary/80 transition-colors"
          >
            <Vault className="w-12 h-12" />
            <span>Memora Vault</span>
          </Link>
        </div>
        <div className="flex space-x-3">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/posts"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/posts")
                    ? "text-primary bg-primary/10"
                    : "text-secondary-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                Posts
              </Link>
              <Link
                href="/categories"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/categories")
                    ? "text-primary bg-primary/10"
                    : "text-secondary-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                Categories
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button
              variant="default"
              className="hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 transition-colors"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>
                <Link
                  href="/posts"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/posts")
                      ? "text-primary bg-primary/10"
                      : "text-secondary-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  Posts
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/categories"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/categories")
                      ? "text-primary bg-primary/10"
                      : "text-secondary-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  Categories
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="default"
                  className="w-full hover:bg-primary/90 transition-colors"
                >
                  Sign In
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
