'use client'
import React, { useEffect, useState } from 'react'
import { client } from '../../utils/client/client'

type Post = {
  _id: string
  title?: string
  slug?: {
    current: string
  }
}

export default function Sanit() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await client.fetch<Post[]>(
        `*[_type == "documentation"]`,
      )
      setPosts(fetchedPosts)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <div>
      Well hello there
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={post?.slug?.current}>{post?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
