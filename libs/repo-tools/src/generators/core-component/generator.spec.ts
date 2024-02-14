import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { Tree, readProjectConfiguration } from '@nx/devkit'

import { coreComponentGenerator } from './generator'
import { CoreComponentGeneratorSchema } from './schema'

describe('core-component generator', () => {
  let tree: Tree
  const options: CoreComponentGeneratorSchema = {
    name: 'test',
    componentType: 'component',
  }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await coreComponentGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
