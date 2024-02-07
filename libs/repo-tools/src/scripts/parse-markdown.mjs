import util from 'util'
import { finished } from 'node:stream/promises'
import { makeSource, defineDocumentType } from '@contentlayer/source-files'

const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    global_id: {
      type: 'string',
    },
  },
}))

const source = makeSource({
  contentDirPath: '/libs/core/src/components',
  documentTypes: [Component],
})

async function logChunks(readable) {
  for await (const chunk of readable) {
    console.log(chunk)
  }
}

source().then((res) => {
  console.log(process.cwd())
  console.log(
    util.inspect(
      res.fetchData({ schemaDef: res.provideSchema() }),
      true,
      10,
      true
    )
  )
})
