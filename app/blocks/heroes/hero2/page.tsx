"use client";

import { Hero2 } from "@/blocks/hero/hero2";
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
  const code = `import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero2 = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge variant="outline">We&apos;re live!</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            This is the start of something new
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button size="lg" className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
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
                  <Link href="/#heroes">Heroes</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Hero2</BreadcrumbPage>
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
            <Hero2 />
          </div>
        </div>
      </div>
    </div>
  );
}
