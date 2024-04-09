"use client";

import { Header1 } from "@/blocks/header/header1";
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
  const code = `"use client";

import { Button } from "@/components/ui/button";
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const Header1 = () => {
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

const [isOpen, setOpen] = useState(false);
return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
    <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
        <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
            {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                {item.href ? (
                    <>
                    <NavigationMenuLink>
                        <Button variant="ghost">{item.title}</Button>
                    </NavigationMenuLink>
                    </>
                ) : (
                    <>
                    <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                            <p className="text-base">{item.title}</p>
                            <p className="text-muted-foreground text-sm">
                                {item.description}
                            </p>
                            </div>
                            <Button size="sm" className="mt-10">
                            Book a call today
                            </Button>
                        </div>
                        <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                            <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                            >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                            </NavigationMenuLink>
                            ))}
                        </div>
                        </div>
                    </NavigationMenuContent>
                    </>
                )}
                </NavigationMenuItem>
            ))}
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
        <p className="font-semibold">TWBlocks</p>
        </div>
        <div className="flex justify-end w-full gap-4">
        <Button variant="ghost" className="hidden md:inline">
            Book a demo
        </Button>
        <div className="border-r hidden md:inline"></div>
        <Button variant="outline">Sign in</Button>
        <Button>Get started</Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
        <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
        {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
            {navigationItems.map((item) => (
                <div key={item.title}>
                <div className="flex flex-col gap-2">
                    {item.href ? (
                    <Link
                        href={item.href}
                        className="flex justify-between items-center"
                    >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                    </Link>
                    ) : (
                    <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                    item.items.map((subItem) => (
                        <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                        >
                        <span className="text-muted-foreground">
                            {subItem.title}
                        </span>
                        <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                    ))}
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
    </header>
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
                  <Link href="/#headers">Headers</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Header1</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex relative bg-background justify-center items-center flex-1">
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
            <Header1 />
          </div>
        </div>
      </div>
    </div>
  );
}
