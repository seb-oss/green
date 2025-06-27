import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Green Design System',
    short_name: 'GDS',
    description:
      'Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#003824',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
