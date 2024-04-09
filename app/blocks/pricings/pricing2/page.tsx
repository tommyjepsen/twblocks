"use client";

import { Pricing2 } from "@/blocks/pricing/pricing2";
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
  const code = `import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Pricing2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Prices that make sense!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Managing a small business today is already tough.
          </p>
        </div>
        <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20">
          <div className="col-span-3 lg:col-span-1"></div>
          <div className="px-3 py-1 md:px-6 md:py-4  gap-2 flex flex-col">
            <p className="text-2xl">Startup</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button variant="outline" className="gap-4 mt-8">
              Try it <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Growth</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button className="gap-4 mt-8">
              Try it <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Enterprise</p>
            <p className="text-sm text-muted-foreground">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$40</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button variant="outline" className="gap-4 mt-8">
              Contact us <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1  py-4">
            <b>Features</b>
          </div>
          <div></div>
          <div></div>
          <div></div>
          {/* New Line */}
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">SSO</div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            AI Assistant
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Version Control
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Members
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-muted-foreground text-sm">5 members</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-muted-foreground text-sm">25 members</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-muted-foreground text-sm">100+ members</p>
          </div>
          {/* New Line */}
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Multiplayer Mode
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          {/* New Line */}
          <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
            Orchestration
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-primary" />
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
                  <Link href="/#pricings">pricings</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Pricing2</BreadcrumbPage>
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
            <Pricing2 />
          </div>
        </div>
      </div>
    </div>
  );
}
