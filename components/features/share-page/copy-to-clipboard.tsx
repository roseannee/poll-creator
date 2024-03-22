"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/shared/icons"

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
    <div className="flex space-x-1 md:space-x-2">
      <Input value={pollLink} readOnly />

      <Button variant="outline" size="icon" onClick={copyLink}>
        <Icons.copy />
      </Button>

      <Toaster />
    </div>
  )
}
