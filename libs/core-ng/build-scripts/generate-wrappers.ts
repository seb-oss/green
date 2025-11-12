import * as fs from 'fs'
import * as path from 'path'

import { CemParser } from '../../../dist/libs/core/src/utils/helpers/component-meta'
import { AngularGenerator } from './generator'

import type { ComponentData } from '../../../dist/libs/core/src/utils/helpers/component-meta.types.d.ts'

export interface GeneratorOptions {
  cemPath?: string
  outputDir?: string
  generateTests?: boolean
}

export interface GenerationResult {
  success: boolean
  componentsGenerated: number
  errors: string[]
}

export interface ComponentInfo {
  className: string
  tagName: string
  angularComponentName: string
  description?: string
  inputCount: number
  outputCount: number
  slotCount: number
  methodCount: number
}

/**
 * Build script to generate Angular wrapper components
 */
async function main() {
  console.log('> Building Angular wrapper components...\n')

  try {
    // Clean the output directory first
    const outputDir = 'libs/core-ng/src/generated'
    console.log('- Cleaning output directory...')
    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true, force: true })
      console.log(`> Cleaned ${outputDir}`)
    }

    // Generate components in the ./generated directory
    const result = await AngularBuildOrchestrator.generateComponents({
      outputDir: outputDir,
      generateTests: true, // Generate test files
    })

    console.log('\n> Build completed successfully!')
    console.log(`> Generated ${result.componentsGenerated} components`)
    console.log(`> Output directory: ${path.resolve('./generated')}`)

    if (result.errors.length > 0) {
      console.log(`\n! ${result.errors.length} errors:`)
      result.errors.forEach((error) => console.log(`   - ${error}`))
      process.exit(1)
    }
  } catch (error) {
    console.error('! Build failed:', error)
    process.exit(1)
  }
}

/**
 * Angular-specific build orchestrator for Custom Elements Manifest components
 * Handles file generation, directory management, and build coordination
 */
export class AngularBuildOrchestrator {
  /**
   * Generates Angular wrapper components from CEM file
   */
  static async generateComponents(
    options: GeneratorOptions = {},
  ): Promise<GenerationResult> {
    const { outputDir = 'src/generated', generateTests = true } = options

    try {
      console.log('> Starting Angular wrapper generation...')
      console.log(`> Output Directory: ${outputDir}`)
      console.log('> Parsing CEM file...')

      const { components, reExportedPrimitives } =
        await CemParser.parseAllComponents()

      if (components.length === 0) {
        console.log('> No components found in CEM file')
        return { success: true, componentsGenerated: 0, errors: [] }
      }

      console.log(`> Found ${components.length} components to generate`)

      // Clean and create output directory
      this.ensureDirectoryExists(outputDir)

      const errors: string[] = []
      let successCount = 0

      // Generate individual components
      for (const componentData of components) {
        try {
          await this.generateSingleComponent(
            componentData,
            outputDir,
            generateTests,
            reExportedPrimitives.map((p) => ({
              primitiveClass: p.primitiveClass,
              reExportPath: p.reExportPath,
            })),
          )
          successCount++
          console.log(
            `> Generated ${AngularGenerator.toAngularComponentName(
              componentData.className,
            )}`,
          )
        } catch (error) {
          const errorMsg = `Failed to generate ${AngularGenerator.toAngularComponentName(
            componentData.className,
          )}: ${error}`
          errors.push(errorMsg)
          console.error(`! ${errorMsg}`)
        }
      }

      console.log(
        `> Generation complete! ${successCount}/${components.length} components generated successfully`,
      )

      if (errors.length > 0) {
        console.log('! Errors encountered:')
        errors.forEach((error) => console.log(`   ${error}`))
      }

      return {
        success: errors.length === 0,
        componentsGenerated: successCount,
        errors,
      }
    } catch (error) {
      console.error(`! Fatal error during generation: ${error}`)
      return {
        success: false,
        componentsGenerated: 0,
        errors: [`Fatal error: ${error}`],
      }
    }
  }

  /**
   * Generates a single Angular component and its test file
   */
  private static async generateSingleComponent(
    componentData: ComponentData,
    outputDir: string,
    generateTests: boolean,
    reExportedPrimitives: {
      primitiveClass: string
      reExportPath: string
    }[] = [],
  ): Promise<void> {
    const componentDir = path.join(
      outputDir,
      this.getComponentDirectoryName(componentData.tagName),
    )
    this.ensureDirectoryExists(componentDir)

    // Generate component file
    const componentContent = AngularGenerator.generateComponent(
      componentData,
      reExportedPrimitives.map((p) => ({
        primitiveClass: p.primitiveClass,
        reExportPath: p.reExportPath,
      })),
    )
    const componentFileName = `${this.getComponentFileName(
      componentData.tagName,
    )}.component.ts`
    const componentPath = path.join(componentDir, componentFileName)

    await fs.promises.writeFile(componentPath, componentContent, 'utf8')

    // Generate individual index.ts file for the component
    const indexContent = this.generateComponentIndex(componentData)
    const indexPath = path.join(componentDir, 'index.ts')
    await fs.promises.writeFile(indexPath, indexContent, 'utf8')

    // Generate test file if requested
    if (generateTests) {
      const testContent = AngularGenerator.generateTest(componentData)
      const testFileName = `${this.getComponentFileName(
        componentData.tagName,
      )}.component.spec.ts`
      const testPath = path.join(componentDir, testFileName)

      await fs.promises.writeFile(testPath, testContent, 'utf8')
    }
  }

  /**
   * Generates an individual index.ts file for a component
   */
  private static generateComponentIndex(componentData: ComponentData): string {
    const componentFileName = this.getComponentFileName(componentData.tagName)

    return `/**
 * ${AngularGenerator.toAngularComponentName(
   componentData.className,
 )} - Angular wrapper for ${componentData.tagName}
 * ${componentData.description || ''}
 *
 * Auto-generated from Custom Elements Manifest
 */

export { ${AngularGenerator.toAngularComponentName(
      componentData.className,
    )} } from './${componentFileName}.component';
`
  }

  /**
   * Lists all available components from the CEM file
   */
  static async listAvailableComponents(
    cemPath: string = '../../custom-elements.json',
  ): Promise<ComponentInfo[]> {
    try {
      const { components } = await CemParser.parseAllComponents(cemPath)
      return components.map((component) => ({
        className: component.className,
        tagName: component.tagName,
        angularComponentName: AngularGenerator.toAngularComponentName(
          component.className,
        ),
        description: component.description,
        inputCount: component.inputs.length,
        outputCount: component.outputs.length,
        slotCount: component.slots.length,
        methodCount: component.methods.length,
      }))
    } catch (error) {
      console.error(`Failed to list components: ${error}`)
      return []
    }
  }

  /**
   * Utility methods
   */
  private static ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }
  }

  private static getComponentDirectoryName(tagName: string): string {
    return tagName.replace(/^gds-/, '').replace(/-/g, '-')
  }

  private static getComponentFileName(tagName: string): string {
    return tagName.replace(/^gds-/, '').replace(/-/g, '-')
  }
}

// Run the build
main()
