type Target = {
  name: string
  dependencies?: string[]
  path?: string
  resources?: string[]
}

type Options = {
  platformVersion: string
  targets: Target[]
}

type File = {
  packageName: string
}

export default ({
  header,
  file,
  options,
}: {
  header: string
  file: File
  options: Options
}): string =>
  `// swift-tools-version: 5.10
// The swift-tools-version declares the minimum version of Swift required to build this package.
//
${header}
import PackageDescription

let package = Package(
        name: "${file.packageName}",
        platforms: [.iOS(.v${options.platformVersion})],
        products: [
            .library(
                name: "${file.packageName}",
                targets: [
                    ${options.targets.map((target) => `"${target.name}"`).join(',\n                            ')}
                ]
            )
        ],
        dependencies: [],
        targets: [
            ${options.targets
              .map((target) => {
                const dependenciesString =
                  target.dependencies && target.dependencies.length > 0
                    ? target.dependencies.map((dep) => `"${dep}"`).join(', ')
                    : ''
                let targetString = `.target(
                name: "${target.name}",
                dependencies: [${dependenciesString}]`
                if (target.path) {
                  targetString += `,
                path: "${target.path}"`
                }
                if (target.resources && target.resources.length > 0) {
                  targetString += `,
                resources: [
                        ${target.resources.map((resource) => `.process("${resource}")`).join(',\n                ')}
                ]`
                }
                targetString += `
            )`
                return targetString
              })
              .join(',\n            ')}
        ]
)
`
