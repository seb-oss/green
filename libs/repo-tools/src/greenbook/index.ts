import { mkdir, readdirSync, writeFile } from 'fs'
import {
  HtmlFileConfiguration,
  htmlPlugin,
} from '@craftamap/esbuild-plugin-html'
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths'
import mdx from '@mdx-js/esbuild'
import chalk from 'chalk'
import * as esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'
import findConfig from 'find-config'
import { globby } from 'globby'

interface Config {
  outDir: string
  componentDir: string
  lib: string
  port: number
}

type EsbuilHtmlPluginFileType = {
  entryPoints?: string[]
  filename: string
  title: string
  htmlTemplate: string
}

/**
 * Standard config settings
 */
const config: Config = {
  outDir: '.green-book',
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
 * Get the names of the directories in a given path
 * @param path - The path to the directory where you want to look for directories
 * @returns string[] - An array of directory names
 */
const getDirectories = (path: string) =>
  readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

/**
 * @param dir string - the path to the directory you want to get the component names from
 * @returns string[] - an array of component names
 */
const getComponentNamesBasedOnDir = (dir: string) => {
  try {
    return getDirectories(dir)
  } catch (error) {
    console.log(
      `${chalk.red('error')} => No component directory found in: ` + dir
    )
    process.exit(1)
  }
}

const componentNames = [...getComponentNamesBasedOnDir(config.componentDir)]

const cleanPath = (path) => {
  const stringArr = path.split('/')
  return stringArr.slice(3, stringArr.length - 1).join('/')
}

/**
 * @description - The main function that starts the Greenbook process
 */
const init = async () => {
  console.log(`${chalk.green('info')} => Starting Greenbook...`)
  console.log(`${chalk.green('info')} => Creating directories...`)

  /**
   * Create the outDir if it doesn't exist
   */
  mkdir(
    `${config.outDir + '/' + config.lib}/generated/`,
    { recursive: true },
    (err) => {
      if (err) {
        console.log(chalk.green(err))
      }
    }
  )

  console.log(`${chalk.green('info')} => Reading .md and .mdx files...`)

  /**
   * Get all the .md and .mdx files in the component directory
   */
  const paths = await globby([
    config.componentDir + '/**/*.stories.md',
    config.componentDir + '/**/*.stories.mdx',
  ])

  /**
   * @description - A template for generating .jsx files that will be used as entrypoints for esbuild
   * @param componentName - The name of the component
   * @param mdxPath - The path to the mdx file
   * @returns string - A string that will be written to a .jsx file
   */
  const jsTemplate = (componentName, mdxPath) => `
      import * as React from 'react'
      import MDXContent from '${mdxPath}'
      import * as ReactDOM from 'react-dom'

      ReactDOM.render(<MDXContent />, document.getElementById('root'))
      `

  console.log(`${chalk.green('info')} => Generating component structure...`)

  const createComponentStructure = (components: string[]) =>
    components.map((componentName) => {
      writeFile(
        config.outDir +
          '/' +
          config.lib +
          '/generated/' +
          componentName +
          '.jsx',
        jsTemplate(
          componentName,
          '../../../' + paths.find((path) => path.includes(componentName))
        ),
        (err) => {
          if (err) throw err
        }
      )
      return {
        name: componentName,
        entryPoint: '/generated/' + componentName + '.jsx',
        path: componentName,
      }
    })

  const components = createComponentStructure(componentNames)

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
          <style>
          body {
            margin: 0;
            padding: 0;
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
            <ul>${components
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

  const htmlFilesSource: HtmlFileConfiguration[] = paths.map((path) => {
    const prePath = cleanPath(path)

    const componentName = prePath.split('/')[1]

    generatedEntrypoints.push(
      config.outDir + '/' + config.lib + '/generated/' + componentName + '.jsx'
    )

    return {
      entryPoints: [
        config.outDir +
          '/' +
          config.lib +
          '/generated/' +
          componentName +
          '.jsx',
      ],
      filename: componentName + '/index.html',
      title: 'Hello World',
      htmlTemplate,
    }
  })

  htmlFilesSource.push({
    entryPoints: [],
    filename: 'index.html',
    title: 'Hello World',
    htmlTemplate,
  })

  console.log(`${chalk.green('info')} => Starting esbuild...`)

  const ctx = await esbuild.context({
    entryPoints: generatedEntrypoints,
    entryNames: '[dir]/[name]',
    metafile: true,
    bundle: true,
    outdir: config.outDir + '/www',
    outbase: config.outDir + '/generated',
    plugins: [
      mdx({ format: 'detect' }),
      htmlPlugin({
        files: htmlFilesSource,
      }),
      sassPlugin({
        type: 'css-text',
      }),
      TsconfigPathsPlugin({ tsconfig: 'tsconfig.base.json' }),
    ],
  })

  console.log(`${chalk.green('info')} => Watching files...`)

  await ctx.watch()

  console.log(`${chalk.green('info')} => Starting esbuild server...`)
  ctx.serve({
    servedir: config.outDir + '/www',
  })

  console.log(
    `${chalk.green('success!')} => Server running at ${chalk.blue(
      'http://localhost:' + config.port
    )}`
  )
}

init()
