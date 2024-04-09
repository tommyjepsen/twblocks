"use client";

import { Stats2 } from "@/blocks/stats/stats2";
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
  const code = `import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Stats2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              This is the start of something new
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                500.000
                <span className="text-muted-foreground text-sm tracking-normal">
                  +20.1%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Monthly active users
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                20.105
                <span className="text-muted-foreground text-sm tracking-normal">
                  -2%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Daily active users
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                $523.520
                <span className="text-muted-foreground text-sm tracking-normal">
                  +8%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Monthly recurring revenue
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                $1052
                <span className="text-muted-foreground text-sm tracking-normal">
                  +2%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Cost per acquisition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
`;

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
                  <Link href="/#stats">Stats</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Stats2</BreadcrumbPage>
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
            <Stats2 />
          </div>
        </div>
      </div>
    </div>
  );
}
