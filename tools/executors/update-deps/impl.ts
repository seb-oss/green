import { ExecutorContext } from '@nrwl/devkit'
const fs = require('fs');

export interface MultipleExecutorOptions {
  outputPath: string
  packageJson: string
}

export default async function multipleExecutor(
  options: MultipleExecutorOptions,
  context: ExecutorContext
) {
  console.info(`Executing "update-dependencies"...`)
  console.info(`Options: ${JSON.stringify(options, null, 2)}`)
  const result = await Promise.race([
    await new Promise( (resolve) => {
      // get workspace config
      const workspace = JSON.parse(fs.readFileSync(`workspace.json`));

      // get package json for project
      const pkg = JSON.parse(fs.readFileSync(`libs/${context.projectName}/package.json`));
      console.log(`existing package.json for ${context.projectName}`, pkg);


      // dependencies as arrays
      const peerDependencies = Object.keys(pkg.peerDependencies);
      const dependencies = Object.keys(pkg.dependencies);

      // get libs based on path
      const libs = Object.values<string>(workspace.projects)
        .filter((path) => /^libs\/.*/.test(path));

      // get current version of each lib from package.json
      const packages = libs.reduce(
        (previous, current) => {
          const pkg = JSON.parse(fs.readFileSync(`${current}/package.json`));
          return {
            ...previous,
            [pkg.name]: pkg.version
          }},{}
      );

      // placeholder for updated package.json for project
      let updatedPkg = {
        ...pkg,
      }

      // update peer dependencies if needed
      if(peerDependencies.length > 0) {
        updatedPkg = {
          ...updatedPkg,
          peerDependencies: {
            ...updatedPkg.peerDependencies,
            ...peerDependencies.reduce((previous, current) => ({
              ...previous,
              [current]:packages[current] ? `^${packages[current]}` : updatedPkg.peerDependencies[current]
            }),{})
          }
        }
      }

      // update dependencies if needed
      if(dependencies.length > 0) {
        updatedPkg = {
          ...updatedPkg,
          dependencies: {
            ...updatedPkg.dependencies,
            ...dependencies.reduce((previous, current) => ({
              ...previous,
              [current]:packages[current] ? `^${packages[current]}` : updatedPkg.dependencies[current]
            }),{})
          }
        }
      }
      console.log(`updated package.json for ${context.projectName}`, updatedPkg);
      fs.writeFile(`libs/${context.projectName}/package.json`, JSON.stringify(updatedPkg, null, 4), resolve);
      console.log(`libs/${context.projectName}/package.json has been updated!`);
      }
    )
      .catch((_) => [{ success: false }])
      .then((_) => [{ success: true }]),
  ])

  for await (const res of result) {
    if (!res.success) return res
  }

  return { success: true }
}
