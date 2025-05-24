//@ts-check
import createMDX from '@next/mdx'

import type { NextConfig } from 'next'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  devIndicators: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
