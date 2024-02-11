import { readdirSync } from 'fs'
import http from 'node:http'
import htmlPkg from '@craftamap/esbuild-plugin-html'
import mdx from '@mdx-js/esbuild'
import * as esbuild from 'esbuild'
import { globby } from 'globby'

const { htmlPlugin } = htmlPkg

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

const componentNames = getDirectories('libs/core/src/components')

const cleanPath = (path) => {
  const stringArr = path.split('/')

  return stringArr.slice(3, stringArr.length - 1).join('/')
}

const paths = await globby([
  'libs/core/src/components/**/*.stories.md',
  'libs/core/src/components/**/*.stories.mdx',
])

const components = componentNames.map((componentName) => {
  return {
    name: componentName,
    entryPoints: paths.filter((path) => path.includes(componentName)),
    path: 'components/' + componentName,
  }
})

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <ul>${components
      .map(
        (component) =>
          `<li><a href="/${component.path}">${component.name}</a></li>`
      )
      .join('')}</ul>
    <div id="root">
    </div>
</body>
</html>
`

const files = paths.map((path) => {
  const prePath = cleanPath(path)

  return {
    entryPoints: [path],
    filename: prePath + '/index.html',
    title: 'Hello World',
    htmlTemplate,
  }
})

let ctx = await esbuild.context({
  entryPoints: [].concat(paths),
  entryNames: '[dir]/[name]',
  metafile: true,
  bundle: true,
  outdir: 'libs/core/.esbuild/www',
  outbase: 'libs/core/src',
  plugins: [
    mdx({ format: 'detect' }),
    htmlPlugin({
      files: files,
    }),
  ],
})

await ctx.watch()

let { host, port } = await ctx.serve({
  servedir: 'libs/core/.esbuild/www',
})

http
  .createServer((req, res) => {
    const options = {
      hostname: host,
      port: port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    }

    // Forward each incoming request to esbuild
    const proxyReq = http.request(options, (proxyRes) => {
      // If esbuild returns "not found", send a custom 404 page
      if (proxyRes.statusCode === 404) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>A custom 404 page</h1>')
        return
      }

      // Otherwise, forward the response from esbuild to the client
      res.writeHead(proxyRes.statusCode, proxyRes.headers)
      proxyRes.pipe(res, { end: true })
    })

    // Forward the body of the request to esbuild
    req.pipe(proxyReq, { end: true })
  })
  .listen(3000)

console.log(`Server running at http://${host}:3000`)
