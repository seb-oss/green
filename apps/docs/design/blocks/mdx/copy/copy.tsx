import { useState } from "react"

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  return (
    <button disabled={isCopied} onClick={copy}>
      <span>{isCopied ? "Copied!" : "Copy"}</span>
    </button>
  )
}
