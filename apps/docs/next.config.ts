//@ts-check

import type { NextConfig } from 'next'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
