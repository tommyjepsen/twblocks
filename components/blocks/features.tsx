import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export const Features = () => (
  <div className="w-full py-20" id="features">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Features
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Combine features to create a unique experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Link href="blocks/features/feature1" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature1.png"
                  alt="feature1"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature2" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature2.png"
                  alt="feature2"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature3" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature3.png"
                  alt="feature3"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature4" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature4.png"
                  alt="feature4"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature5" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature5.png"
                  alt="feature5"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature6" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature6.png"
                  alt="feature6"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature7" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature7.png"
                  alt="feature7"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature8" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature8.png"
                  alt="feature8"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/features/feature9" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                <Image
                  src="/feature9.png"
                  alt="feature9"
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
