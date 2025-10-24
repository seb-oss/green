import path from 'path'
import fs from 'fs-extra'

/**
 * Generates a Kotlin manifest file (GdsIcons.kt) referencing all icons in the given directory structure.
 * Mirrors the logic of the original bash script.
 */
export async function generateIconManifest({
  iconRootDir,
  manifestPackage = 'se.seb.gds.icons',
  manifestFilename = 'GdsIcons.kt',
}: {
  iconRootDir: string
  manifestPackage?: string
  manifestFilename?: string
}) {
  const manifestPath = path.join(iconRootDir, manifestFilename)
  let manifestContent = `package ${manifestPackage}\n\nimport androidx.compose.ui.graphics.vector.ImageVector\n\n/** A generated class to hold all GDS ImageVectors. */\nobject GdsIcons {\n`
  let allIconMapContent = ''

  // Find all style subdirectories (e.g., solid, regular)
  const styleDirs = (await fs.readdir(iconRootDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  for (const styleDir of styleDirs) {
    // PascalCase the style name
    const styleObject = styleDir.charAt(0).toUpperCase() + styleDir.slice(1)
    const dirPath = path.join(iconRootDir, styleDir)
    const iconFqnPackage = `${manifestPackage}.${styleDir}`
    manifestContent += `\n    object ${styleObject} {\n`

    // Find all .kt files in the style directory
    const files = (await fs.readdir(dirPath)).filter((f) => f.endsWith('.kt'))
    for (const file of files) {
      const iconName = path.basename(file, '.kt')
      manifestContent += `        val ${iconName} = ${iconFqnPackage}.${iconName}\n`
      allIconMapContent += `        \"${styleObject}.${iconName}\" to ${styleObject}.${iconName},\n`
    }
    manifestContent += '    }\n'
  }

  // Add the All map
  manifestContent += `\n    val All: Map<String, ImageVector> = mapOf(\n${allIconMapContent}    )\n}\n`

  await fs.writeFile(manifestPath, manifestContent)
  console.log(`✅ Successfully generated icon manifest at ${manifestPath}`)
}

