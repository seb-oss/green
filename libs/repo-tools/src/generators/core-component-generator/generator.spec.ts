import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { Tree, readProjectConfiguration } from '@nx/devkit'

import { coreComponentGeneratorGenerator } from './generator'
import { CoreComponentGeneratorGeneratorSchema } from './schema'

describe('core-component-generator generator', () => {
  let tree: Tree
  const options: CoreComponentGeneratorGeneratorSchema = { name: 'test' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await coreComponentGeneratorGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
