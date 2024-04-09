import { Github, MoveDown, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge variant="outline">We&apos;re live!</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            React SaaS website blocks to copy/paste
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Beautifully designed website blocks for your SaaS website. Easily
            customizable with shadcn-ui themes and works in dark- and light
            mode.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Button size="lg" className="gap-2" variant="outline">
            See all blocks <MoveDown className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            className="gap-2"
            onClick={() => {
              window.open("https://github.com/tommyjepsen/twblocks", "_blank");
            }}
          >
            Repo on Github <Github className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
