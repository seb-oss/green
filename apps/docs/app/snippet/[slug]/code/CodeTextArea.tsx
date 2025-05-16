// app/template/[slug]/code/CodeTextArea.tsx
'use client'

interface CodeTextAreaProps {
  code: string
}

export function CodeTextArea({ code }: CodeTextAreaProps) {
  return (
    <textarea
      readOnly
      className="code-textarea"
      onClick={(e) => (e.target as HTMLTextAreaElement).select()}
      value={code}
    />
  )
}
