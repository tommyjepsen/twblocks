"use client";

import { Feature2 } from "@/blocks/feature/feature2";
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
  const code = `import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge>Platform</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Something new!
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-muted-foreground text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
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
                <BreadcrumbPage>Feature2</BreadcrumbPage>
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
            <Feature2 />
          </div>
        </div>
      </div>
    </div>
  );
}
