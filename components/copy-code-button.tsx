import { useState } from "react";
import { Button } from "./ui/button";
import { ClipboardCheck, Copy } from "lucide-react";

export const CopyCodeButton = ({ code }: { code: string }) => {
  const [isCopied, setCopied] = useState(false);
  return (
    <Button
      className="gap-2"
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
      }}
    >
      <Copy className="w-4 h-4" />
      {isCopied ? "Copied!" : "Copy the code"}
    </Button>
  );
};
