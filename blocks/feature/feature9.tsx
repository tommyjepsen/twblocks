import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

export const Feature9 = () => {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onMouseDown) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
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
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl cursor-ew-resize"
              onMouseMove={onMouseMove}
              onMouseDown={() => setOnMouseDown(true)}
              onMouseUp={() => setOnMouseDown(false)}
            >
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1"
                style={{
                  left: inset + "%",
                }}
              >
                <div className="bg-muted rounded w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center">
                  <GripVertical className="h-4 w-4 select-none" />
                </div>
              </div>
              <Image
                src="/feature8.png"
                alt="feature8"
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <Image
                src="/darkmode-feature8.png"
                alt="darkmode-feature8.png"
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
