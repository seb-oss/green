import React, { useEffect, useState } from 'react'

const ComponentList = ({ path }) => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('/storybook/stories.json')
        const data = await response.json()
        const filteredStories = Object.values(data.stories).filter((story) =>
          story.kind.startsWith(path),
        )
        setStories(filteredStories)
      } catch (error) {
        console.error('Error fetching stories:', error)
      }
    }

    fetchStories()
  }, [path])

  return (
    <div>
      {stories.map((story) => (
        <Link kind={story.kind} story={story.name}>
          {story.name}
        </Link>
      ))}
    </div>
  )
}

export default ComponentList
