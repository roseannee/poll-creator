"use client"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Toaster } from "./ui/toaster"
import { useToast } from "./ui/use-toast"

export function CopyToClipboard({ pollId }: { pollId: string }) {
  const pollLink = `https://poll-creator/${pollId}/vote`

  const { toast } = useToast()

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pollLink)
      toast({
        title: "Link copied!",
        description: "Your link has been copied to your clipboard.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `Failed to copy text to clipboard: ${error}`,
      })
    }
  }

  return (
    <div className="flex space-x-2">
      <Input value={pollLink} readOnly />

      <Button variant="outline" size="icon" onClick={copyLink}>
        <Icons.copy className="size-4" />
      </Button>

      <Toaster />
    </div>
  )
}
