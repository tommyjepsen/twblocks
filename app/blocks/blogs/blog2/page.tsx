"use client";

import { Blog2 } from "@/blocks/blog/blog2";
import { CopyCodeButton } from "@/components/copy-code-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Block() {
  const code = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Blog2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          Latest articles
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer md:col-span-2">
          <div className="bg-muted rounded-md aspect-video"></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>News</Badge>
            <p className="flex flex-row gap-2 text-sm items-center">
              <span className="text-muted-foreground">By</span>{" "}
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>John Johnsen</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="max-w-3xl text-4xl tracking-tight">
              Pay supplier invoices
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video"></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>News</Badge>
            <p className="flex flex-row gap-2 text-sm items-center">
              <span className="text-muted-foreground">By</span>{" "}
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>John Johnsen</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Pay supplier invoices
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video"></div>
          <div className="flex flex-row gap-4 items-center">
            <Badge>News</Badge>
            <p className="flex flex-row gap-2 text-sm items-center">
              <span className="text-muted-foreground">By</span>{" "}
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>John Johnsen</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="max-w-3xl text-2xl tracking-tight">
              Pay supplier invoices
            </h3>
            <p className="max-w-3xl text-muted-foreground text-base">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);`;

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="bg-secondary mt-20 w-full">
        <div className="container items-center text-secondary-foreground text-sm text-center py-4 flex flex-row justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Blocks</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/#blogs">Blogs</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog2</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex bg-background justify-center items-start flex-1">
        <div className="w-full max-w-8xl relative">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
            <CopyCodeButton code={code} />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Terminal className="w-4 h-4" />
                  Show code
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[800px]">
                <SyntaxHighlighter
                  language="javascript"
                  className="rounded-md max-h-[70vh]"
                  style={vscDarkPlus}
                >
                  {code}
                </SyntaxHighlighter>
              </DialogContent>
            </Dialog>
          </div>
           <div className="rounded-md bg-background">
            <Blog2 />
          </div>
        </div>
      </div>
    </div>
  );
}
