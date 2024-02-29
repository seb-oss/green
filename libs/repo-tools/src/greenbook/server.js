import { mkdir, readdirSync, writeFile } from 'fs'
import htmlPkg from '@craftamap/esbuild-plugin-html'
import tscpp from '@esbuild-plugins/tsconfig-paths'
import mdx from '@mdx-js/esbuild'
import * as esbuild from 'esbuild'
import esp from 'esbuild-sass-plugin'
import { globby } from 'globby'

const { TsconfigPathsPlugin } = tscpp
const { htmlPlugin } = htmlPkg
const { sassPlugin } = esp
const COMPONENT_DIR = 'libs/core/src/components'
const LIB = 'core'
const OUT_DIR = '.greenbook/'

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

const componentNames = getDirectories(COMPONENT_DIR)

const cleanPath = (path) => {
  const stringArr = path.split('/')
  return stringArr.slice(3, stringArr.length - 1).join('/')
}

const paths = await globby([
  COMPONENT_DIR + '/**/*.stories.md',
  COMPONENT_DIR + '/**/*.stories.mdx',
])

const jsTemplate = (componentName, mdxPath) => `
import * as React from 'react'
import MDXContent from '${mdxPath}'
import * as ReactDOM from 'react-dom'

ReactDOM.render(<MDXContent />, document.getElementById('root'))
`
mkdir(`${OUT_DIR + LIB}/generated/`, { recursive: true }, (err) => {
  if (err) {
    console.log(err)
  }
})

const components = componentNames.map((componentName) => {
  writeFile(
    OUT_DIR + 'generated/' + componentName + '.jsx',
    jsTemplate(
      componentName,
      '../../' + paths.find((path) => path.includes(componentName))
    ),
    (err) => {
      if (err) throw err
    }
  )
  return {
    name: componentName,
    entryPoint: 'generated/' + componentName + '.jsx',
    path: componentName,
  }
})

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
      globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true;
      new EventSource('/esbuild').addEventListener('change', () => location.reload());
    </script>
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

const generatedEntrypoints = []

const files = paths.map((path) => {
  const prePath = cleanPath(path)

  const componentName = prePath.split('/')[1]

  generatedEntrypoints.push(OUT_DIR + 'generated/' + componentName + '.jsx')

  return {
    entryPoints: [OUT_DIR + 'generated/' + componentName + '.jsx'],
    filename: componentName + '/index.html',
    title: componentName,
    htmlTemplate,
  }
})

files.push({
  filename: '/index.html',
  title: 'Greenbook',
  htmlTemplate,
})

console.log(files)

let ctx = await esbuild.context({
  entryPoints: generatedEntrypoints,
  entryNames: '[dir]/[name]',
  metafile: true,
  bundle: true,
  outdir: OUT_DIR + 'www',
  outbase: OUT_DIR + 'generated',
  plugins: [
    mdx({ format: 'detect' }),
    htmlPlugin({
      files: files,
    }),
    sassPlugin({
      type: 'css-text',
    }),
    TsconfigPathsPlugin({ tsconfig: 'tsconfig.base.json' }),
  ],
})

await ctx.watch()

ctx.serve({
  servedir: OUT_DIR + 'www',
})

console.log(`Server running at http://localhost:8000`)
