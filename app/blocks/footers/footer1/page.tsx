"use client";

import { Footer1 } from "@/blocks/footer/footer1";
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
  const code = `import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                TWBlocks™
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Managing a small business today is already tough.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>1 Tailwind Way</p>
                <p>Menlo Park</p>
                <p>CA 94025</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`;

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
                  <Link href="/#footers">Footers</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Footer1</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex bg-background justify-center items-center relative flex-1">
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
        <div className="w-full max-w-8xl relative">
          <div className="rounded-md bg-background">
            <Footer1 />
          </div>
        </div>
      </div>
    </div>
  );
}
