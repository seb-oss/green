//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@babel/runtime'],
  output: 'export',
  nx: {
    svgr: false,
  },
}

const plugins = [withNx]

module.exports = composePlugins(...plugins)(nextConfig)
