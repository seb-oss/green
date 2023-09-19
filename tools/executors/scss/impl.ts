import { ExecutorContext, runExecutor } from '@nx/devkit'
import * as copyfiles from 'copyfiles'

export interface MultipleExecutorOptions {
  outputPath: string
  packageJson: string
}

export default async function multipleExecutor(
  options: MultipleExecutorOptions,
  context: ExecutorContext
) {
  console.info(`Executing "build-lib"...`)
  console.info(`Options: ${JSON.stringify(options, null, 2)}`)
  const result = await Promise.race([
    await runExecutor(
      { project: context.projectName, target: 'compile-scss' },
      {},
      context
    ),
    // copy readme and changelog
    await new Promise((resolve) =>
      copyfiles(
        [`libs/${context.projectName}/*.md`, options.outputPath],
        { up: 2 },
        resolve
      )
    )
      .catch((_) => [{ success: false }])
      .then((_) => [{ success: true }]),
    // copy package json
    await new Promise((resolve) =>
      copyfiles([options.packageJson, options.outputPath], { up: 2 }, resolve)
    )
      .catch((_) => [{ success: false }])
      .then((_) => [{ success: true }]),
    // copy scss files
    await new Promise((resolve) =>
      copyfiles(
        [`libs/${context.projectName}/scss/**/*.scss`, `${options.outputPath}`],
        { up: 2 },
        resolve
      )
    )
      .catch((_) => [{ success: false }])
      .then((_) => [{ success: true }]),
  ])

  for await (const res of result) {
    if (!res.success) return res
  }

  return { success: true }
}
