import { SlugPipe } from './slug.pipe'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // SlugPipe - constructor()
  // ----------------------------------------------------------------------------
  describe('SlugPipe - constructor()', () => {
    it('create an instance', () => {
      const pipe = new SlugPipe()
      expect(pipe).toBeTruthy()
    })
  })
})
