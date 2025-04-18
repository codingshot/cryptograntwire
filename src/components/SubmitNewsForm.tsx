
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SendHorizontal } from "lucide-react";

export default function SubmitNewsForm() {
  const [isOpen, setIsOpen] = useState(false);
  const submissionText = "!submit @curatedotfun #cryptogrants";
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(submissionText);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-1">
          <SendHorizontal className="h-4 w-4" />
          <span>Submit News</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Submit News</DialogTitle>
          <DialogDescription>
            Share Web3 grant and DAO governance updates with our community
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">How to Submit:</h3>
            <ol className="list-decimal pl-4 space-y-2 text-sm">
              <li>Enter the URL of a newsworthy tweet about Web3 grants or DAO governance</li>
              <li>Add optional notes or context</li>
              <li>Submit for review</li>
            </ol>
          </div>
          <div className="p-3 bg-gray-100 rounded flex items-center justify-between">
            <code className="text-sm">{submissionText}</code>
            <Button onClick={handleCopy} variant="outline" size="sm">
              Copy
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
