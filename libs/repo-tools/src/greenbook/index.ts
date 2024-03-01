import { promises as fs } from 'fs'
import nodePath from 'path'
import {
  HtmlFileConfiguration,
  htmlPlugin,
} from '@craftamap/esbuild-plugin-html'
import mdx from '@mdx-js/esbuild'
import chalk from 'chalk'
import * as esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'
import findConfig from 'find-config'
import { globby } from 'globby'
import remarkGfm from 'remark-gfm'

interface Config {
  outDir: string
  componentDir: string
  lib: string
  port: number
}

/**
 * Standard config settings
 */
const config: Config = {
  outDir: '.greenbook/_generated_',
  componentDir: 'libs/core/src/components',
  lib: 'core',
  port: 8000,
}

/**
 * Importing a config the user can set in the .greenbookrc file
 */
const configJSON: string = findConfig.read('.greenbookrc')
const importedConfig: Config = JSON.parse(configJSON)

Object.assign(config, importedConfig)

/**
 * @description - A function that clears a directory
 * @param path - The path to the directory you want to clear
 */
const clearDir = async (path: string) => {
  await fs.rm(path, { recursive: true }).catch((err) => {
    console.log(`${chalk.red('error')} => ${err}`)
  })
}

/**
 * Get the names of the directories in a given path
 * @param path - The path to the directory where you want to look for directories
 * @returns string[] - An array of directory names
 */
const getDirectories = (path: string) =>
  fs
    .readdir(path, { withFileTypes: true })
    .then((dirents) => {
      return dirents
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
    })
    .catch((err) => {
      console.log(`${chalk.red('error')} => ${err}`)
    })

/**
 *
 * @param path string - The path to clean
 * @returns
 */
const cleanPath = (path) => {
  const stringArr = path.split('/')
  return stringArr.slice(3, stringArr.length - 1).join('/')
}

const createOutDir = async () => {
  fs.mkdir(config.outDir + '/' + config.lib, {
    recursive: true,
  }).catch((err) => {
    console.log(`${chalk.red('error')} => ${err}`)
  })
}

const copyFonts = async () => {
  console.log(`${chalk.green('info')} => Copying fonts...`)

  fs.cp(
    process.cwd() + '/node_modules/@sebgroup/fonts/css',
    config.outDir + '/' + config.lib + '/www/assets/css',
    { recursive: true }
  ).catch((err) => {
    console.log(`${chalk.red('error')} => ${err}`)
  })

  fs.cp(
    process.cwd() + '/node_modules/@sebgroup/fonts/fonts',
    config.outDir + '/' + config.lib + '/www/assets/fonts',
    { recursive: true }
  ).catch((err) => {
    console.log(`${chalk.red('error')} => ${err}`)
  })
}

const getMDXFiles = async (path: string) => {
  return globby([path + '/**/*.stories.md', path + '/**/*.stories.mdx'])
}

/**
 * @description - A template for generating .jsx files that will be used as entrypoints for esbuild
 * @param componentName - The name of the component
 * @param mdxPath - The path to the mdx file
 * @returns string - A string that will be written to a .jsx file
 */
const jsTemplate = (components, mdxPath) => `
import * as React from 'react'
import MDXContent from '${mdxPath}'
import * as ReactDOM from 'react-dom'

ReactDOM.render(<MDXContent />, document.getElementById('root'))
`

/**
 * @description - A function that creates the component structure
 * @param components - An array of component names
 * @param paths - An array of paths to the .md and .mdx files
 * @returns object[] - An array of objects that contain the component name, entrypoint, and path
 */
const createComponentSrc = async (components: string[], paths: string[]) =>
  components
    .filter((name) => paths.find((path) => path.includes(name)))
    .map((componentName) => {
      const jsxDir = config.outDir + '/' + config.lib + '/'

      const mdxPath = nodePath.relative(
        jsxDir,
        paths.find((path) => path.includes(componentName))
      )
      fs.writeFile(
        jsxDir + '/' + componentName + '.jsx',
        jsTemplate(componentName, mdxPath)
      ).catch((err) => {
        console.log(`${chalk.red('error')} => ${err}`)
      })
      return {
        name: componentName,
        entryPoint: componentName + '.jsx',
        path: componentName,
      }
    })

/**
 * @description - The main function that starts the Greenbook process
 */
const init = async () => {
  console.log(`${chalk.green('info')} => Starting Greenbook...`)
  console.log(`${chalk.green('info')} => Clearing output directory...`)
  await clearDir(config.outDir)
  console.log(`${chalk.green('info')} => Creating new output directories...`)

  /**
   * Create the outDir if it doesn't exist
   */
  createOutDir()

  copyFonts()

  console.log(`${chalk.green('info')} => Reading .md and .mdx files...`)
  /**
   * Get all the .md and .mdx files in the component directory
   */
  const mdxPaths = await getMDXFiles(config.componentDir)

  const componentNames = await getDirectories(config.componentDir)

  if (!Array.isArray(componentNames)) {
    console.log(
      `${chalk.red('error')} => No components found in directory: ${
        config.componentDir
      }`
    )
    process.exit(1)
  }

  console.log(`${chalk.green('info')} => Generating component structure...`)
  const componentSrc = await createComponentSrc(componentNames, mdxPaths)

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
          <link rel="stylesheet" href="/assets/css/seb-fonts.css">
          <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'SEBSansSerif', sans-serif;
          }

          #greenbook {
            min-height: 100vh;
            display: grid;
            grid-template-areas:
                "menu main"
                "menu main"
                "menu main";
            grid-template-columns: 200px 1fr;
            grid-template-rows: 1fr;
          }

          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          </style>
      </head>
      <body>
          <div id="greenbook">
            <ul>${componentSrc
              .map(
                (component) =>
                  `<li><a href="/${component.path}">${component.name}</a></li>`
              )
              .join('')}</ul>
            <div id="root">
            </div>
          </div>
      </body>
      </html>
      `

  const generatedEntrypoints = []

  console.log(`${chalk.green('info')} => Generating entrypoints...`)

  const htmlFilesSource: HtmlFileConfiguration[] = mdxPaths.map((path) => {
    const componentName = path
      .split('/')
      .find((part) => componentNames.find((name) => name === part))

    if (!componentName) {
      console.log(
        `${chalk.red('error')} => No component name found for path: ${path}`
      )
    }

    generatedEntrypoints.push(
      config.outDir + '/' + config.lib + '/' + componentName + '.jsx'
    )

    return {
      entryPoints: [
        config.outDir + '/' + config.lib + '/' + componentName + '.jsx',
      ],
      filename: componentName + '/index.html',
      title: componentName,
      htmlTemplate,
    }
  })

  htmlFilesSource.push({
    entryPoints: [],
    filename: 'index.html',
    title: 'Greenbook',
    htmlTemplate,
  })

  console.log(`${chalk.green('info')} => Starting esbuild...`)

  const ctx = await esbuild.context({
    entryPoints: generatedEntrypoints,
    entryNames: '[dir]/[name]',
    metafile: true,
    bundle: true,
    outdir: config.outDir + '/' + config.lib + '/www',
    outbase: config.outDir + '/' + config.lib,
    plugins: [
      mdx({ format: 'detect', remarkPlugins: [remarkGfm] }),
      htmlPlugin({
        files: htmlFilesSource,
      }),
      sassPlugin({
        type: 'css-text',
        // importMapper: (path) => {
        //   console.log(path)

        //   return path
        // },
      }),
    ],
  })

  console.log(`${chalk.green('info')} => Watching files...`)

  await ctx.watch()

  console.log(`${chalk.green('info')} => Starting esbuild server...`)
  ctx.serve({
    servedir: config.outDir + '/' + config.lib + '/www',
  })

  console.log(
    `${chalk.green('success!')} => Server running at ${chalk.blue(
      'http://localhost:' + config.port
    )}`
  )
}

init()
