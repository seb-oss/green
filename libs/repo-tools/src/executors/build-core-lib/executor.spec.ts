import { BuildCoreLibExecutorSchema } from './schema'
import executor from './executor'

const options: BuildCoreLibExecutorSchema = {}

describe('BuildCoreLib Executor', () => {
  it('can run', async () => {
    const output = await executor(options)
    expect(output.success).toBe(true)
  })
})
