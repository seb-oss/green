//@ts-check
import createMDX from '@next/mdx'

import type { NextConfig } from 'next'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
