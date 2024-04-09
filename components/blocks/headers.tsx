import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export const Headers = () => (
  <div className="w-full py-20" id="headers">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Headers
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Headers you can add to the top of your website.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Link href="blocks/headers/header1" className="hover:opacity-70">
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20">
                <Image
                  src="/header1.png"
                  alt="header1"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
