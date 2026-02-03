import { describe, expect, it } from 'vitest'

import type { Package } from 'custom-elements-manifest'

import { CemParser } from './component-meta'

describe('component-meta', () => {
  // Shared mock manifest that mimics real-world custom-elements.json structure
  // This includes all scenarios: primitives, components, re-exports, and utilities
  const mockManifest: Package = {
    schemaVersion: '1.0.0',
    readme: '',
    modules: [
      // Primitive modules
      {
        kind: 'javascript-module',
        path: 'src/primitives/listbox/option.ts',
        declarations: [
          {
            kind: 'class',
            name: 'GdsOption',
            tagName: 'gds-option',
            customElement: true,
            description: 'A listbox option primitive',
            members: [],
          },
        ],
        exports: [],
      },
      {
        kind: 'javascript-module',
        path: 'src/primitives/menu/menu-item.ts',
        declarations: [
          {
            kind: 'class',
            name: 'GdsMenuItem',
            tagName: 'gds-menu-item',
            customElement: true,
            description: 'A menu item primitive',
            members: [],
          },
        ],
        exports: [],
      },
      // Component declarations
      {
        kind: 'javascript-module',
        path: 'src/components/dropdown/dropdown.ts',
        declarations: [
          {
            kind: 'class',
            name: 'GdsDropdown',
            tagName: 'gds-dropdown',
            customElement: true,
            description: 'A dropdown component',
            members: [],
          },
        ],
        exports: [],
      },
      {
        kind: 'javascript-module',
        path: 'src/components/button/button.ts',
        declarations: [
          {
            kind: 'class',
            name: 'GdsButton',
            tagName: 'gds-button',
            customElement: true,
            description: 'A button component',
            members: [],
          },
        ],
        exports: [],
      },
      // Component file that re-exports primitives (mimics dropdown.component.ts)
      // This mimics real-world structure where *.component.ts files re-export primitives
      {
        kind: 'javascript-module',
        path: 'src/components/dropdown/dropdown.component.ts',
        declarations: [
          {
            kind: 'class',
            name: 'GdsDropdown',
            tagName: 'gds-dropdown',
            customElement: true,
            description: 'A dropdown component',
            members: [],
          },
        ],
        exports: [
          {
            kind: 'js',
            name: 'GdsDropdown',
            declaration: {
              name: 'GdsDropdown',
              module: 'src/components/dropdown/dropdown.component.ts',
            },
          },
          {
            kind: 'js',
            name: '*',
            declaration: {
              name: '*',
              module: 'src/primitives/listbox/option',
            },
          },
          {
            kind: 'js',
            name: '*',
            declaration: {
              name: '*',
              module: 'src/primitives/menu/menu-item',
            },
          },
        ],
      },
      // Non-component utility module for filtering tests
      {
        kind: 'javascript-module',
        path: 'src/utils/helper.ts',
        declarations: [
          {
            kind: 'class',
            name: 'Helper',
            members: [],
          },
        ],
        exports: [],
      },
    ],
  }

  describe('CemParser', () => {
    describe('loadManifest', () => {
      it('should throw an error when manifest file cannot be loaded', async () => {
        try {
          await CemParser.loadManifest('/non/existent/path.json')
          // If we reach here, the test should fail
          throw new Error('Should have thrown an error')
        } catch (error) {
          // Error is expected
          expect(error).toBeDefined()
        }
      })
    })

    describe('getComponentModules', () => {
      it('should extract modules containing web components', () => {
        const componentModules = CemParser.getComponentModules(mockManifest)

        // Should find dropdown, button, and the primitive modules
        expect(componentModules.length).toBeGreaterThan(0)
        const hasButton = componentModules.some(
          (mod) => mod.path === 'src/components/button/button.ts',
        )
        expect(hasButton).toBe(true)
      })

      it('should filter out non-component declarations', () => {
        const componentModules = CemParser.getComponentModules(mockManifest)

        // Should not include the helper module
        const hasHelper = componentModules.some(
          (mod) => mod.path === 'src/utils/helper.ts',
        )
        expect(hasHelper).toBe(false)
      })
    })

    describe('findReExportedPrimitives', () => {
      it('should find re-exported primitives using module property', () => {
        const reExportedPrimitives =
          CemParser.findReExportedPrimitives(mockManifest)

        expect(reExportedPrimitives).toHaveLength(2)

        // Check first primitive (GdsOption)
        const option = reExportedPrimitives.find(
          (p) => p.primitiveClass === 'GdsOption',
        )
        expect(option).toBeDefined()
        expect(option!.primitiveName).toBe('gds-option')
        expect(option!.reExportModule).toBe(
          'src/components/dropdown/dropdown.component.ts',
        )
        expect(option!.reExportPath).toBe(
          'components/dropdown/dropdown.component.js',
        )

        // Check second primitive (GdsMenuItem)
        const menuItem = reExportedPrimitives.find(
          (p) => p.primitiveClass === 'GdsMenuItem',
        )
        expect(menuItem).toBeDefined()
        expect(menuItem!.primitiveName).toBe('gds-menu-item')
        expect(menuItem!.reExportModule).toBe(
          'src/components/dropdown/dropdown.component.ts',
        )
      })

      it('should return empty array when no re-exported primitives exist', () => {
        // Create a manifest without any re-exports
        const manifestWithoutReExports: Package = {
          schemaVersion: '1.0.0',
          readme: '',
          modules: [
            {
              kind: 'javascript-module',
              path: 'src/components/button/button.ts',
              declarations: [
                {
                  kind: 'class',
                  name: 'GdsButton',
                  tagName: 'gds-button',
                  customElement: true,
                  members: [],
                },
              ],
              exports: [],
            },
          ],
        }

        const reExportedPrimitives = CemParser.findReExportedPrimitives(
          manifestWithoutReExports,
        )

        expect(reExportedPrimitives).toBeInstanceOf(Array)
        expect(reExportedPrimitives).toHaveLength(0)
      })

      it('should ignore exports that are not from primitives', () => {
        const manifestWithNormalExports: Package = {
          schemaVersion: '1.0.0',
          readme: '',
          modules: [
            {
              kind: 'javascript-module',
              path: 'src/components/button/index.ts',
              declarations: [],
              exports: [
                {
                  kind: 'js',
                  name: '*',
                  declaration: {
                    name: '*',
                    module: 'src/utils/helper',
                  },
                },
              ],
            },
          ],
        }

        const reExportedPrimitives = CemParser.findReExportedPrimitives(
          manifestWithNormalExports,
        )

        expect(reExportedPrimitives).toHaveLength(0)
      })
    })

    describe('extractComponentData', () => {
      it('should extract basic component data', () => {
        // Use the button component
        const module = mockManifest.modules.find(
          (m) => m.path === 'src/components/button/button.ts',
        )!
        const declaration = module.declarations[0] as any

        const componentData = CemParser.extractComponentData(
          module,
          declaration,
        )

        expect(componentData.tagName).toBe('gds-button')
        expect(componentData.className).toBe('GdsButton')
        expect(componentData.description).toBe('A button component')
        expect(componentData.outputPath).toBe('src/components/button/button.ts')
        expect(componentData.sourcePath).toBe('src/components/button/button.ts')
        expect(componentData.properties).toBeInstanceOf(Array)
        expect(componentData.events).toBeInstanceOf(Array)
        expect(componentData.slots).toBeInstanceOf(Array)
        expect(componentData.methods).toBeInstanceOf(Array)
      })

      it('should extract component data from primitives', () => {
        // Use the first primitive module
        const module = mockManifest.modules.find(
          (m) => m.path === 'src/primitives/listbox/option.ts',
        )!
        const declaration = module.declarations[0] as any

        const componentData = CemParser.extractComponentData(
          module,
          declaration,
        )

        expect(componentData.tagName).toBe('gds-option')
        expect(componentData.className).toBe('GdsOption')
        expect(componentData.description).toBe('A listbox option primitive')
      })

      it('should detect form control components', () => {
        const module = {
          kind: 'javascript-module' as const,
          path: 'src/components/input/input.ts',
          declarations: [],
          exports: [],
        }
        const declaration = {
          kind: 'class' as const,
          name: 'GdsInput',
          tagName: 'gds-input',
          customElement: true,
          description: 'An input component',
          members: [
            {
              kind: 'field' as const,
              name: 'value',
              inheritedFrom: {
                name: 'GdsFormControlElement',
                module: 'src/components/form/form-control.ts',
              },
            },
          ],
        }

        const componentData = CemParser.extractComponentData(
          module,
          declaration as any,
        )

        expect(componentData.isFormControl).toBe(true)
        expect(componentData.isIconComponent).toBe(false)
      })

      it('should detect icon components', () => {
        const module = {
          kind: 'javascript-module' as const,
          path: 'src/components/icon/icons/ai.ts',
          declarations: [],
          exports: [],
        }
        const declaration = {
          kind: 'class' as const,
          name: 'IconAi',
          tagName: 'gds-icon-ai',
          customElement: true,
          description: 'AI icon',
          members: [
            {
              kind: 'field' as const,
              name: 'size',
              inheritedFrom: {
                name: 'GdsIcon',
                module: 'src/components/icon/icon.component.ts',
              },
            },
          ],
        }

        const componentData = CemParser.extractComponentData(
          module,
          declaration as any,
        )

        expect(componentData.isIconComponent).toBe(true)
        expect(componentData.isFormControl).toBe(false)
      })

      it('should detect link components', () => {
        const module = {
          kind: 'javascript-module' as const,
          path: 'src/components/link/link.ts',
          declarations: [],
          exports: [],
        }
        const declaration = {
          kind: 'class' as const,
          name: 'GdsLink',
          tagName: 'gds-link',
          customElement: true,
          description: 'A link component',
          members: [
            {
              kind: 'field' as const,
              name: 'href',
              privacy: undefined,
            },
          ],
        }

        const componentData = CemParser.extractComponentData(
          module,
          declaration as any,
        )

        expect(componentData.isLinkComponent).toBe(true)
      })

      it('should not detect component types when inheritance is missing', () => {
        const module = {
          kind: 'javascript-module' as const,
          path: 'src/components/button/button.ts',
          declarations: [],
          exports: [],
        }
        const declaration = {
          kind: 'class' as const,
          name: 'GdsButton',
          tagName: 'gds-button',
          customElement: true,
          description: 'A button component',
          members: [
            {
              kind: 'field' as const,
              name: 'variant',
              privacy: undefined,
            },
          ],
        }

        const componentData = CemParser.extractComponentData(
          module,
          declaration as any,
        )

        expect(componentData.isFormControl).toBe(false)
        expect(componentData.isIconComponent).toBe(false)
        expect(componentData.isLinkComponent).toBe(false)
      })

      it('should handle components with no members', () => {
        const module = {
          kind: 'javascript-module' as const,
          path: 'src/components/divider/divider.ts',
          declarations: [],
          exports: [],
        }
        const declaration = {
          kind: 'class' as const,
          name: 'GdsDivider',
          tagName: 'gds-divider',
          customElement: true,
          description: 'A divider component',
          members: [],
        }

        const componentData = CemParser.extractComponentData(
          module,
          declaration as any,
        )

        expect(componentData.isFormControl).toBe(false)
        expect(componentData.isIconComponent).toBe(false)
        expect(componentData.isLinkComponent).toBe(false)
      })

      it('should detect subcomponents from CEM plugin', () => {
        const module = {
          kind: 'javascript-module' as const,
          path: 'src/components/dropdown/dropdown.ts',
          declarations: [],
          exports: [],
        }
        const declaration = {
          kind: 'class' as const,
          name: 'GdsDropdown',
          tagName: 'gds-dropdown',
          customElement: true,
          description: 'A dropdown component',
          members: [],
          subcomponents: [
            {
              tagName: 'gds-option',
              description: 'Dropdown option',
            },
            {
              tagName: 'gds-menu-heading',
              description: 'Menu heading',
            },
          ],
        }

        const componentData = CemParser.extractComponentData(
          module,
          declaration as any,
        )

        expect(componentData.subcomponents).toBeInstanceOf(Array)
        expect(componentData.subcomponents).toHaveLength(2)
        expect(componentData.subcomponents![0].tagName).toBe('gds-option')
        expect(componentData.subcomponents![0].description).toBe(
          'Dropdown option',
        )
        expect(componentData.subcomponents![1].tagName).toBe('gds-menu-heading')
      })
    })

    describe('parseAllComponents', () => {
      it('should include wrappers for re-exported primitives', async () => {
        // Mock the loadManifest to return our test manifest
        const originalLoadManifest = CemParser.loadManifest
        CemParser.loadManifest = async () => mockManifest

        try {
          const { components, reExportedPrimitives } =
            await CemParser.parseAllComponents()

          // Should include the dropdown component AND the re-exported primitives
          expect(components.length).toBeGreaterThan(1)

          // Should have found the re-exported primitives
          expect(reExportedPrimitives).toHaveLength(2)

          // Verify that components include the re-exported primitives
          const optionComponent = components.find(
            (c) => c.tagName === 'gds-option',
          )
          expect(optionComponent).toBeDefined()
          expect(optionComponent!.sourcePath).toBe(
            'src/components/dropdown/dropdown.component.ts',
          )

          const menuItemComponent = components.find(
            (c) => c.tagName === 'gds-menu-item',
          )
          expect(menuItemComponent).toBeDefined()
        } finally {
          // Restore original method
          CemParser.loadManifest = originalLoadManifest
        }
      })

      it('should deduplicate primitives re-exported from multiple locations', async () => {
        // Create a manifest where the same primitive is re-exported from multiple components
        const manifestWithDuplicateReExports: Package = {
          schemaVersion: '1.0.0',
          readme: '',
          modules: [
            // Primitive module
            {
              kind: 'javascript-module',
              path: 'src/primitives/listbox/option.ts',
              declarations: [
                {
                  kind: 'class',
                  name: 'GdsOption',
                  tagName: 'gds-option',
                  customElement: true,
                  description: 'A listbox option primitive',
                  members: [],
                },
              ],
              exports: [],
            },
            // Component 1 that re-exports the primitive
            {
              kind: 'javascript-module',
              path: 'src/components/dropdown/dropdown.component.ts',
              declarations: [
                {
                  kind: 'class',
                  name: 'GdsDropdown',
                  tagName: 'gds-dropdown',
                  customElement: true,
                  members: [],
                },
              ],
              exports: [
                {
                  kind: 'js',
                  name: 'GdsDropdown',
                  declaration: {
                    name: 'GdsDropdown',
                    module: 'src/components/dropdown/dropdown.component.ts',
                  },
                },
                {
                  kind: 'js',
                  name: '*',
                  declaration: {
                    name: '*',
                    module: 'src/primitives/listbox/option',
                  },
                },
              ],
            },
            // Component 2 that also re-exports the same primitive
            {
              kind: 'javascript-module',
              path: 'src/components/select/select.component.ts',
              declarations: [
                {
                  kind: 'class',
                  name: 'GdsSelect',
                  tagName: 'gds-select',
                  customElement: true,
                  members: [],
                },
              ],
              exports: [
                {
                  kind: 'js',
                  name: 'GdsSelect',
                  declaration: {
                    name: 'GdsSelect',
                    module: 'src/components/select/select.component.ts',
                  },
                },
                {
                  kind: 'js',
                  name: '*',
                  declaration: {
                    name: '*',
                    module: 'src/primitives/listbox/option',
                  },
                },
              ],
            },
          ],
        }

        const originalLoadManifest = CemParser.loadManifest
        CemParser.loadManifest = async () => manifestWithDuplicateReExports

        try {
          const { components, reExportedPrimitives } =
            await CemParser.parseAllComponents()

          // Should find 2 re-export declarations (from dropdown.component.ts and select.component.ts)
          // index.ts files are filtered out
          expect(reExportedPrimitives).toHaveLength(2)

          // But should only include GdsOption ONCE in components array (deduplicated)
          const optionComponents = components.filter(
            (c) => c.tagName === 'gds-option',
          )
          expect(optionComponents).toHaveLength(1)

          // Should also have the two regular components (dropdown and select)
          expect(components).toHaveLength(3)

          const componentNames = components.map((c) => c.tagName).sort()
          expect(componentNames).toEqual([
            'gds-dropdown',
            'gds-option',
            'gds-select',
          ])
        } finally {
          CemParser.loadManifest = originalLoadManifest
        }
      })
    })
  })
})
