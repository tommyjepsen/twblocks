import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export const Stats = () => (
  <div className="w-full py-20" id="stats">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Stats
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Stats to show case your data in a beautiful way.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Link href="blocks/stats/stats1" className="hover:opacity-70">
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20">
                <Image
                  src="/stats1.png"
                  alt="stats1"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/stats/stats2" className="hover:opacity-70">
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20">
                <Image
                  src="/stats2.png"
                  alt="stats2"
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
