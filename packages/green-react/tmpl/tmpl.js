#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const { mkdir, writeFile } = require('fs/promises')
const { join, resolve } = require('path')
const { renderFile } = require('ejs')
const { prompt } = require('inquirer')
const { camelCase, pascalCase } = require('change-case')

const run = async () => {
  const result = await prompt([
    {
      name: 'name',
      message: 'Component name',
      validate: (val) => (!!val),
    }
  ])
  const name = pascalCase(result.name)
  const folderName = camelCase(result.name)
  const dir = resolve(__dirname, '../src/', folderName)

  const data = { name }

  // create dir
  await mkdir(dir, { recursive: true })
  
  // parse template files
  const [index, component, stories, test] = await Promise.all([
    renderFile(`${__dirname}/index.ejs`, data),
    renderFile(`${__dirname}/Component.ejs`, data),
    renderFile(`${__dirname}/Component.stories.ejs`, data),
    renderFile(`${__dirname}/Component.test.ejs`, data),
  ])

  // save files
  await Promise.all([
    writeFile(join(dir, `${name}.tsx`), component),
    writeFile(join(dir, `${name}.test.tsx`), test),
    writeFile(join(dir, `${name}.stories.mdx`), stories),
    writeFile(join(dir, 'index.ts'), index),
  ])
}
run()
