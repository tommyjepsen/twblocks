"use client";

import { Blog1 } from "@/blocks/blog/blog1";
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
  const code = `import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Blog1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          Latest articles
        </h4>
        <Button className="gap-4">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
          <p className="text-muted-foreground text-base">
            Our goal is to streamline SMB trade, making it easier and faster
            than ever.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
          <p className="text-muted-foreground text-base">
            Our goal is to streamline SMB trade, making it easier and faster
            than ever.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
          <p className="text-muted-foreground text-base">
            Our goal is to streamline SMB trade, making it easier and faster
            than ever.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-muted rounded-md aspect-video mb-4"></div>
          <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
          <p className="text-muted-foreground text-base">
            Our goal is to streamline SMB trade, making it easier and faster
            than ever.
          </p>
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
                <BreadcrumbPage>Blog1</BreadcrumbPage>
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
            <Blog1 />
          </div>
        </div>
      </div>
    </div>
  );
}
