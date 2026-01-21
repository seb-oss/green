import { expect } from '@esm-bundle/chai'

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
          expect.fail('Should have thrown an error')
        } catch (error) {
          // Error is expected
          expect(error).to.exist
        }
      })
    })

    describe('getComponentModules', () => {
      it('should extract modules containing web components', () => {
        const componentModules = CemParser.getComponentModules(mockManifest)

        // Should find dropdown, button, and the primitive modules
        expect(componentModules.length).to.be.greaterThan(0)
        const hasButton = componentModules.some(
          (mod) => mod.path === 'src/components/button/button.ts',
        )
        expect(hasButton).to.be.true
      })

      it('should filter out non-component declarations', () => {
        const componentModules = CemParser.getComponentModules(mockManifest)

        // Should not include the helper module
        const hasHelper = componentModules.some(
          (mod) => mod.path === 'src/utils/helper.ts',
        )
        expect(hasHelper).to.be.false
      })
    })

    describe('findReExportedPrimitives', () => {
      it('should find re-exported primitives using module property', () => {
        const reExportedPrimitives =
          CemParser.findReExportedPrimitives(mockManifest)

        expect(reExportedPrimitives).to.have.lengthOf(2)

        // Check first primitive (GdsOption)
        const option = reExportedPrimitives.find(
          (p) => p.primitiveClass === 'GdsOption',
        )
        expect(option).to.exist
        expect(option!.primitiveName).to.equal('gds-option')
        expect(option!.reExportModule).to.equal(
          'src/components/dropdown/dropdown.component.ts',
        )
        expect(option!.reExportPath).to.equal('components/dropdown/dropdown.component.js')

        // Check second primitive (GdsMenuItem)
        const menuItem = reExportedPrimitives.find(
          (p) => p.primitiveClass === 'GdsMenuItem',
        )
        expect(menuItem).to.exist
        expect(menuItem!.primitiveName).to.equal('gds-menu-item')
        expect(menuItem!.reExportModule).to.equal(
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

        expect(reExportedPrimitives).to.be.an('array')
        expect(reExportedPrimitives).to.have.lengthOf(0)
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

        expect(reExportedPrimitives).to.have.lengthOf(0)
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

        expect(componentData.tagName).to.equal('gds-button')
        expect(componentData.className).to.equal('GdsButton')
        expect(componentData.description).to.equal('A button component')
        expect(componentData.outputPath).to.equal(
          'src/components/button/button.ts',
        )
        expect(componentData.sourcePath).to.equal(
          'src/components/button/button.ts',
        )
        expect(componentData.properties).to.be.an('array')
        expect(componentData.events).to.be.an('array')
        expect(componentData.slots).to.be.an('array')
        expect(componentData.methods).to.be.an('array')
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

        expect(componentData.tagName).to.equal('gds-option')
        expect(componentData.className).to.equal('GdsOption')
        expect(componentData.description).to.equal('A listbox option primitive')
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
          expect(components.length).to.be.greaterThan(1)

          // Should have found the re-exported primitives
          expect(reExportedPrimitives).to.have.lengthOf(2)

          // Verify that components include the re-exported primitives
          const optionComponent = components.find(
            (c) => c.tagName === 'gds-option',
          )
          expect(optionComponent).to.exist
          expect(optionComponent!.sourcePath).to.equal(
            'src/components/dropdown/dropdown.component.ts',
          )

          const menuItemComponent = components.find(
            (c) => c.tagName === 'gds-menu-item',
          )
          expect(menuItemComponent).to.exist
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
          expect(reExportedPrimitives).to.have.lengthOf(2)

          // But should only include GdsOption ONCE in components array (deduplicated)
          const optionComponents = components.filter(
            (c) => c.tagName === 'gds-option',
          )
          expect(optionComponents).to.have.lengthOf(
            1,
            'GdsOption should appear exactly once',
          )

          // Should also have the two regular components (dropdown and select)
          expect(components).to.have.lengthOf(
            3,
            'Should have dropdown, select, and option (once)',
          )

          const componentNames = components.map((c) => c.tagName).sort()
          expect(componentNames).to.deep.equal([
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
