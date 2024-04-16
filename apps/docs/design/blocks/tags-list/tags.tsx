// Tags.tsx
import React from "react"

import "@/tags-list/tags.css"

interface TagsProps {
  tags: string[]
  max?: number
  title?: string
}

function More() {
  return (
    <div className="gds-tag gds-tags-more">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </div>
  )
}

const Tags: React.FC<TagsProps> = ({ tags, title, max = 3 }) => {
  const more = Math.max(0, tags.length - max)

  return (
    <menu className="gds-tags">
      <div className="tags-title">{title}</div>
      <ul>
        {tags.slice(0, max).map((tag, index) => (
          <div key={tag} className="gds-tag">
            {tag}
          </div>
        ))}
        {more > 0 && <More />}
      </ul>
    </menu>
  )
}

export default Tags
