"use client";

import { Feature6 } from "@/blocks/feature/feature6";
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
  const code = `import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature6 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Something new!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Managing a small business today is already tough.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1" />
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
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
                  <Link href="/#features">Features</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Feature6</BreadcrumbPage>
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
              <DialogContent className="max-w-[800px] ">
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
            <Feature6 />
          </div>
        </div>
      </div>
    </div>
  );
}
